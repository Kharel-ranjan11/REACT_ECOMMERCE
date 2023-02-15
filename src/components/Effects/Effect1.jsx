import React from "react";
export const Effect = () => {
    // const [state, setState] = React.useState(false)
    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        if (window.scrollY > 20) {
            alert('more ')
        }
    })
    return (
        <>
            <section id="effect">
                <div className="btn">
                    Toggle
                </div>
                <p>underline</p>
            </section>
        </>
    )
}