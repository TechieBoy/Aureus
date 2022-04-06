import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Aureus } from "../target/types/aureus";
import { SolendMarket } from '@solendprotocol/solend-sdk';
import {clusterApiUrl, Connection } from "@solana/web3.js"

describe("aureus", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.Provider.env()
  let connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');
  anchor.setProvider(provider);

  const program = anchor.workspace.Aureus as Program<Aureus>;
  const authority = anchor.web3.Keypair.generate();

  const merchantList = [];
  for (let i = 0; i < 16; ++i) {
    let kp = anchor.web3.Keypair.generate();
    merchantList.push(kp.publicKey);
  }

  it("Is initialized!", async () => {
    await provider.connection.confirmTransaction(
      await provider.connection.requestAirdrop(authority.publicKey, 2 * anchor.web3.LAMPORTS_PER_SOL), "confirmed");
    const [state_pda, _bump] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(anchor.utils.bytes.utf8.encode("state"))],
      program.programId
    );
    const tx = await program.rpc.initialize(merchantList,
      {
        accounts: {
          authority: authority.publicKey,
          state: state_pda,
          systemProgram: anchor.web3.SystemProgram.programId
        },
        signers: [authority]
      });
    console.log("Your transaction signature", tx);
  });

  it("Solend market test", async () => {
    const market = await SolendMarket.initialize(
      connection
    );
    // 2. Read on-chain accounts for reserve data and cache
    await market.loadReserves();
    // Read Solend liquidity mining stats
    await market.loadRewards()

    // Refresh all cached data
    await market.refreshAll()
    for (let r of market.reserves) {
      console.log(r.config.symbol)
      console.log(r.totalBorrowAPY().totalAPY * 100)
    }


    const usdcReserve = market.reserves.find(res => res.config.symbol === 'USDC');
    console.log(usdcReserve.stats.totalDepositsWads.toString());


  });
});
