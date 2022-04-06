use std::thread::AccessError;

use anchor_lang::prelude::*;
use anchor_spl::token::{Token, TokenAccount};

declare_id!("6RfngPJpgsk6NunDQrDqVForuVy7G5v4McctZuAGM84a");

// TODO:
// Still v0, move to v1 design
#[program]
pub mod aureus {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>, merchant_accounts: [Pubkey; 16]) -> Result<()> {
        ctx.accounts.state.authority = *ctx.accounts.authority.key;
        ctx.accounts.state.allowed_keys = merchant_accounts;
        msg!("DATA: {}", ctx.accounts.to_account_infos().len());
        Ok(())
    }

    pub fn create(
        ctx: Context<CreatePaymentObligation>,
        amount: u64,
        usdc_amount: u64,
        interest_rate: f64,
        end_timestamp: i64,
        duration: i64,
    ) -> Result<()> {
        let payment = &mut ctx.accounts.payment_obligation;
        require!(
            ctx.accounts
                .state
                .allowed_keys
                .contains(&ctx.accounts.merchant.key()),
            StateInvalidAddress
        );
        payment.client = ctx.accounts.client.key();
        payment.merchant = ctx.accounts.merchant.key();
        payment.token_mint = ctx.accounts.token_mint.key();
        payment.amount = amount;
        payment.usdc_amount = usdc_amount;
        payment.interest_rate = interest_rate;
        payment.start_timestamp = Clock::get()?.unix_timestamp;
        payment.end_timestamp = end_timestamp;
        payment.prev_timestamp = 0;
        payment.duration = duration;

        Ok(())
    }
    
    pub fn pay(ctx: Context<PayOutstandingObligation>) -> Result<()>{
        ctx.accounts.payment_obligation.prev_timestamp =  Clock::get()?.unix_timestamp;
        Ok(())
    }

    // TODO
    pub fn liquidate(ctx: Context<Liquidate>) -> Result<()> {
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

#[derive(Accounts)]
pub struct CreatePaymentObligation<'info> {
    #[account(mut)]
    pub client: Signer<'info>,

    #[account(init, payer = client, seeds=[client.key.as_ref()], bump)]
    pub payment_obligation: Account<'info, Payment>,

    #[account(seeds=[b"state"], bump)]
    pub state: Account<'info, AureusState>,

    pub token_mint: Account<'info, TokenAccount>,

    /// CHECK: only account info needed
    pub merchant: UncheckedAccount<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct PayOutstandingObligation<'info> {
    #[account(mut)]
    pub client: Signer<'info>,

    #[account(seeds=[client.key.as_ref()], bump)]
    pub payment_obligation: Account<'info, Payment>,

    #[account(seeds=[b"state"], bump)]
    pub state: Account<'info, AureusState>,

    pub token_mint: Account<'info, TokenAccount>,

    /// CHECK: only account info needed
    pub merchant: UncheckedAccount<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Liquidate<'info> {
    #[account(mut)]
    pub client: Signer<'info>,

    #[account(init, payer = client, seeds=[client.key.as_ref()], bump)]
    pub payment_obligation: Account<'info, Payment>,

    #[account(seeds=[b"state"], bump)]
    pub state: Account<'info, AureusState>,

    pub token_mint: Account<'info, TokenAccount>,

    /// CHECK: only account info needed
    pub merchant: UncheckedAccount<'info>,
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
    // Prev timestamp
    pub prev_timestamp: i64,
    // Payment due date
    pub end_timestamp: i64,
    // How many seconds between 2 consecutive payments?
    pub duration: i64,
}
