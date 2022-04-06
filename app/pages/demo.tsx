import { NextPage } from "next"
import { ChangeEvent, useState, useEffect } from "react";

const Demo: NextPage = () => {
    // TODO Fetch from solend
    let baseapy = 1.4;
    // TODO Fetch from merchant integraion api
    let baseprice = 500;

    let [isPayNowModalActive, setPayNowModalActive] = useState(false);
    function togglePayNowModal() {
        setPayNowModalActive(!isPayNowModalActive);
    }

    let [paymentTerm, setPaymentTerm] = useState(4);
    let [apy, setApy] = useState(baseapy);
    let [price, setPrice] = useState(baseprice);
    let [weeklyRepayment, setWeeklyRepayment] = useState(baseprice / paymentTerm);

    let [isPaymentTermModalActive, setPaymentTermModalActive] = useState(false);
    function togglePaymentTermModal() {
        setPayNowModalActive(false);
        setPaymentTermModalActive(!isPaymentTermModalActive);
    }


    function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
        if (e.target) {
            let ev = e.target
            setPaymentTerm(parseInt(ev.value))
        }

    }

    function updateAPR() {
        switch (paymentTerm) {
            case 4:
                setApy(baseapy + 0.12)
                break
            case 8:
                setApy(baseapy + 0.31)
                break
            case 16:
                setApy(baseapy + 0.53)
                break
            default:
                setApy(baseapy + 1.0)
        }
    }
    useEffect(() => {
        updateAPR()
    }, [paymentTerm])

    useEffect(() => {
        setPrice(baseprice + (baseprice * (apy / 100)));
    }, [apy])

    useEffect(() => {
        setWeeklyRepayment(price / paymentTerm)
    }, [price])


    return (
        <>
            <section className="hero is-success is-halfheight">
                <div className="hero-body">
                    <div className="">
                        <p className="title">
                            <button onClick={togglePayNowModal} className="button js-modal-trigger" data-target="buy-modal">Buy now with Solana pay!</button>
                        </p>
                        <p className="subtitle">
                            Aureus pay supported!
                        </p>
                    </div>
                </div>

            </section>

            //---------------------------------------- Pay now modal -----------------------------------------------------------------
            <div className={`modal ${isPayNowModalActive ? "is-active" : ""}`} id="buy-modal">
                <div className="modal-background" onClick={togglePayNowModal}></div>
                <div className="modal-content">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title has-text-black is-size-5">
                                Solana Pay!
                            </p>
                        </header>

                        <div className="card-content">
                            <div className="columns">
                                <div className="column is-half is-narrow">
                                    <h1 className="has-text-black">How would you like to pay?</h1>
                                </div>
                                <div className="column is-half is-narrow has-text-right">
                                    <h1 className="has-text-black is-size-4">$ 500</h1>
                                </div>
                            </div>
                            <div className="divider is-right"></div>
                            <div className="content has-text-black" onClick={togglePaymentTermModal}>
                                <div className="columns ">
                                    <div className="column is-half is-narrow pb-0 hvr-icon-forward">
                                        <div className="hvr-icon">🜚 Pay with Aureus ➡</div>
                                    </div>
                                    <div className="column is-half is-narrow has-text-right has-text-info pb-0">
                                        🛈 How does this work?
                                    </div>
                                </div>
                                <div className="divider is-right"></div>
                                <div className="hvr-icon-forward">
                                    <div className="hvr-icon">¤ Continue with S Pay</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="modal-close is-large" onClick={togglePayNowModal} aria-label="close"></button>
            </div>

            // -------------------------------------- Payment term modal ---------------------------------------------------------
            <div className={`modal ${isPaymentTermModalActive ? "is-active" : ""}`} id="buy-modal">
                <div className="modal-background" onClick={togglePaymentTermModal}></div>
                <div className="modal-content">
                    <div className="card">
                        <div className="card-content has-text-centered">
                            <div className="columns">
                                <div className="column has-text-black">
                                    <h1 className="is-size-3"><span className="accent">${weeklyRepayment.toFixed(2)}</span> <span className="is-size-6">/week</span></h1>
                                </div>
                                <div className="column has-text-black">
                                    <div className="select mt-1">
                                        <select onChange={handleSelect} className="has-text-black">
                                            <option value="4" selected={true}>4 weeks</option>
                                            <option value="8">8 weeks</option>
                                            <option value="16">16 weeks</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <nav className="level">
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading has-text-black">Collateral</p>
                                        <p className="is-size-5 has-text-black">{(12 + ((Math.random() * (paymentTerm / 4)))).toFixed(2)} ◎</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading has-text-black">Interest Rate</p>
                                        <p className="is-size-5 has-text-black">{apy}%</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading has-text-black">Total</p>
                                        <p className="is-size-5 has-text-black">${price}</p>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <footer className="card-footer">
                            <a href="#" className="card-footer-item">← Back</a>
                            <a href="#" className="card-footer-item">Details 🛈</a>
                            <a href="#" className="card-footer-item">Pay →</a>
                        </footer>

                    </div>
                </div>
                <button className="modal-close is-large" onClick={togglePaymentTermModal} aria-label="close"></button>
            </div>
        </>
    )
}

export default Demo