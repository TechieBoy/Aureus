use anchor_lang::prelude::*;

declare_id!("6RfngPJpgsk6NunDQrDqVForuVy7G5v4McctZuAGM84a");

#[program]
pub mod aureus {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>, merchant_accounts: [Pubkey; 16]) -> Result<()> {
        ctx.accounts.state.authority = *ctx.accounts.authority.key;
        ctx.accounts.state.allowed_keys = merchant_accounts;
        msg!("DATA: {}", ctx.accounts.to_account_infos().len());
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    #[account(init, payer = authority, seeds=[b"state"], bump)]
    pub state: Account<'info, AureusState>,
    pub system_program: Program<'info, System>,
}

// Program State with static PDA
#[account]
#[derive(Default)]
pub struct AureusState {
    pub authority: Pubkey,
    pub allowed_keys: [Pubkey; 16],
}

#[account]
#[derive(Default)]
pub struct Payment {
    pub client: Pubkey,
    pub merchant: Pubkey,
    // Which Token is being used as collateral
    pub token_mint: Pubkey,
    // Amount of Token being used as collateral
    pub amount: u64,
    // Amount being paid to merchant in USDC
    pub usdc_amount: u64,
    // Interest rate issued
    pub interest_rate: f64,
    // Payment start timestamp
    pub start_timestamp: i64,
    // Payment due date
    pub end_timestamp: i64,
    // Interest due date
    pub next_payment_due: i64,
}