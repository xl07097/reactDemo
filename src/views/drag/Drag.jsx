import React, { useRef, useEffect } from "react";

function Drag() {
    const dragImg = useRef(null);

    useEffect(() => {
        console.dir(dragImg);
    }, []);

    function onDragEnter(event) {
        // 当可拖动的元素进入可放置的目标时高亮目标节点
        event.target.style.border = "2px dashed red";
        // event.target.style.background = "purple";
    }

    function onDragLeave(event) {
        // event.target.style.background = "";
        event.target.style.border = "1px solid #0c884f";
    }

    function onDrop(event) {
        event.stopPropagation();
        event.preventDefault();

        event.target.style.background = "";
        event.target.style.border = "1px solid #0c884f";
        let file = event.dataTransfer.files[0];
        let URL = window.URL || window.webkitURL;
        let img = new Image();
        img.width = 200;
        img.src = URL.createObjectURL(file);
        img.onload = function () {
            document.querySelector(".drag-img").appendChild(img); //将图片拖到body内
            
            URL.revokeObjectURL(img.src);
        };
    }

    function ondragover(event) {
        event.preventDefault();
        // console.log(event);
    }

    return (
        <div>
            <div
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDragOver={ondragover}
                onDrop={onDrop}
                className="grad"
                style={{ height: "200px", backgroundColor: "#96abbb", border: "1px solid #0c884f" }}
            ></div>
            <div className="drag-img" ref={dragImg}></div>
        </div>
    );
}

export default Drag;
