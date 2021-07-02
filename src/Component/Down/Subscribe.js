import React from 'react'

export default function Subscribe() {
    return (
        <div>
            <section className="subscribe">
                <div className="subshead">
                    <h3 id="subs">SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <p>Subscribe to our newsletter for giveaways, sales, and to hear about the latest products</p>
                    <form>
                    <div className="form-group">
                            <input placeholder="Enter your email address" id="subinput" className="form-control" />
                            <button className="btn btn-dark" id="subbtn">SUBSCRIBE</button>
                    </div>
                </form>
                </div>
               
            </section>
        </div>
    )
}
