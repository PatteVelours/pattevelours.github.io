

function scroll_to_anchor(anchor_id, offset= 150) {


    // get the element with the id passed in
    const anchor = document.getElementById(anchor_id);

    // get the bounding rectangle of the body and the element
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = anchor.getBoundingClientRect().top;

    // get the position of the element relative to the body
    const elementPosition = elementRect - bodyRect;

    // subtract the offset from the element position
    const offsetPosition = elementPosition - offset;

    // finally scroll to the position
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}
