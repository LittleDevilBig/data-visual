<script>
    let m = { x: 0, y: 0 };
    let circles = [];
    let colour = "green";
    let radius = 5;

    function handleMousemove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }

    function handleRedButton() {
        colour = "red";
    }

    function handleGreenButton() {
        colour = "green";
    }

    function handleBlueButton() {
        colour = "blue";
    }

    function handleClick(event) {
        circles = [...circles, { "x": event.clientX, "y": event.clientY, col: colour, r: radius }];
        console.log(circles);
    }

    function handleRadiusChange(event) {
        radius = event.target.value;
    }

    function saveData() {
        const dataStr = JSON.stringify(circles);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "circles_data.json";
        a.click();
    }
</script>

<div>
    <svg width=800 height=600 on:mousemove={handleMousemove} on:click={handleClick}>
        {#each circles as c}
            <circle cx={c.x} cy={c.y} r={c.r} style="fill: {c.col}" />
        {/each}
    </svg>

    <button on:click={handleRedButton}>Make Red</button>
    <button on:click={handleGreenButton}>Make Green</button>
    <button on:click={handleBlueButton}>Make Blue</button>

    <input type="range" min="1" max="20" value={radius} on:input={handleRadiusChange} />
    <button on:click={saveData}>Save Data</button>
</div>

<style>
    svg {
        background-color: whitesmoke;
        border: 1px solid black;
    }
</style>
