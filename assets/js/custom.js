// @ts-nocheck
// @ts-expect-error
//@ts-check
document.addEventListener("DOMContentLoaded", function (event) {
    'use strict';
    try {

    } catch (error) {

    }
    let cardBack = document.querySelectorAll('.mask');
    let timeFront;
    // Add class to see tips of game on the back of the card
    function flipCard() {
        this.classList.add('back');
    }
    // Remove class to see the mask
    timeFront = setInterval(() => {
        for (let i = 0; i < cardBack.length; i++) {
            const el = cardBack[i];
            el.classList.remove('back');
        }
    }, 10000);
    cardBack.forEach(function (mask) {
        mask.addEventListener('click', flipCard);
    });


    //Identify tips cards pair
    const tips_array = ["a_tips", "b_tips", "c_tips", "d_tips", "e_tips", "f_tips", "g_tips", "h_tips", "i_tips", "j_tips", "k_tips", "l_tips", "m_tips", "n_tips"];
    // Array with tiles
    const tiles_array = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9", "tile10", "tile11", "tile12", "tile13", "tile14", "tile15", "tile16", "tile17", "tile18", "tile19", "tile20", "tile21", "tile22", "tile23", "tile24", "tile25", "tile26", "tile27", "tile28"]

    // Array will hold which tiles are the propriate tip
    let a_array = [],
        b_array = [],
        c_array = [],
        d_array = [],
        e_array = [],
        f_array = [],
        g_array = [],
        h_array = [],
        i_array = [],
        j_array = [],
        k_array = [],
        l_array = [],
        m_array = [],
        n_array = [];

    // Last tile tip click;
    let last_tip = "";

    // Count amout of clicks made by the user
    let click_user = 0;

    // Store tiles clicked on this array
    let clicked_tiles = [];

    // Boolean if the same tile is clicked or not
    let duplicate_click = false;

    // GameStart variable true or false, true =game active
    let game_start = false;

    // Adding event listeners for tiles and buttons
    // Listening buttons
    document.getElementById('start').addEventListener('click', start_game);
    document.getElementById('reset').addEventListener('click', reset_game);
    // Loop to get id from tiles

    for (let t = 1; t < tiles_array.length + 1; t++) {
        let id_tile = "tile" + t;
        document.getElementById(id_tile).addEventListener('click', function () {
            tile_id(id_tile);
        })
    }

    // tiles_id_loop();
    // Resetting variables that should be seset if you click Play or Reset. A shallow variable reset
    function reset_var_shallow() {
        // Resetting last state clicked, amount clicks, clicked tiles, duplicate tiles variable
        let last_state = "",
            click = 0,
            clicked_tiles = [],
            duplicate_tiles = false;
        // Start game, if variable is true then you can play the game
        game_start = true;
        // tiles_id_loop();
    }

    // Resetting variables associated whith randomization of tiles placement. This is a deep reset
    function reset_var_deep() {
        let a_tips = 0,
            b_tips = 0,
            c_tips = 0,
            d_tips = 0,
            e_tips = 0,
            f_tips = 0,
            g_tips = 0,
            h_tips = 0,
            i_tips = 0,
            j_tips = 0,
            k_tips = 0,
            l_tips = 0,
            m_tips = 0,
            n_tips = 0;

        // Empty arrays to store new tiles
        a_array = [],
            b_array = [],
            c_array = [],
            d_array = [],
            e_array = [],
            f_array = [],
            g_array = [],
            h_array = [],
            i_array = [],
            j_array = [],
            k_array = [],
            l_array = [],
            m_array = [],
            n_array = [];

        for (let i = 0; i < tips_array.length; i++) {
            // const element = tips_array[i];
            let num_tile = Math.floor(Math.random() * 14);
            switch (num_tile) {
                case 1:
                    if (a_tips < 2) {
                        a_tips++;
                        a_array.push(tips_array[i]);
                    }
                    else {
                        a_tips--;
                    }
                    break;
                case 2:
                    if (b_tips < 2) {
                        b_tips++;
                        b_array.push(tips_array[i]);

                    }
                    else {
                        b_tips--;
                    }
                    break;
                case 3:
                    if (c_tips < 2) {
                        c_tips++;
                        c_array.push(tips_array[i]);

                    }
                    else {
                        c_tips--;
                    }
                    break;
                case 4:
                    if (d_tips < 2) {
                        d_tips++;
                        d_array.push(tips_array[i]);

                    }
                    else {
                        d_tips--;
                    }
                    break;
                case 5:
                    if (e_tips < 2) {
                        e_tips++;
                        e_array.push(tips_array[i]);

                    }
                    else {
                        e_tips--;
                    }
                    break;
                case 6:
                    if (f_tips < 2) {
                        f_tips++;
                        f_array.push(tips_array[i]);

                    }
                    else {
                        f_tips--;
                    }
                    break;
                case 7:
                    if (g_tips < 2) {
                        g_tips++;
                        g_array.push(tips_array[i]);

                    }
                    else {
                        g_tips--;
                    }
                    break;
                case 8:
                    if (h_tips < 2) {
                        h_tips++;
                        h_array.push(tips_array[i]);

                    }
                    else {
                        h_tips--;
                    }
                    break;
                case 9:
                    if (i_tips < 2) {
                        i_tips++;
                        i_array.push(tips_array[i]);

                    }
                    else {
                        i_tips--;
                    }
                    break;
                case 10:
                    if (j_tips < 2) {
                        j_tips++;
                        j_array.push(tips_array[i]);

                    }
                    else {
                        j_tips--;
                    }
                    break;
                case 11:
                    if (k_tips < 2) {
                        k_tips++;
                        k_array.push(tips_array[i]);

                    }
                    else {
                        k_tips--;
                    }
                    break;
                case 12:
                    if (l_tips < 2) {
                        l_tips++;
                        l_array.push(tips_array[i]);

                    }
                    else {
                        l_tips--;
                    }
                    break;
                case 13:
                    if (m_tips < 2) {
                        m_tips++;
                        m_array.push(tips_array[i]);

                    }
                    else {
                        m_tips--;
                    }
                    break;
                case 14:
                    if (n_tips < 2) {
                        n_tips++;
                        n_array.push(tips_array[i]);

                    }
                    else {
                        n_tips--;
                    }
                    break;
                default:
                    break;
            }
            // console.log(a_array);
            console.table(tips_array[i])
            // console.log(b_array);
            // console.log(c_array);
            // console.log(d_array);
            // console.log(e_array);
            // console.log(f_array);
            // console.log(g_array);
            // console.log(h_array);
            // console.log(i_array);
            // console.log(j_array);
            // console.log(k_array);
            // console.log(l_array);
            // console.log(m_array);
            // console.log(n_array);
        }
    }

    function tile_id(tile) {
        // If game is active
        // console.log(tile);
        document.getElementById(tile).style.backgroundColor = "red";
        if (game_start) {
            console.log("The game has started");
            // Checking array, if the tile clicked has been clicked previously
            for (let i = 0; i < clicked_tiles.length; i++) {
                const element = clicked_tiles[i];

                if (tile == element) {
                    duplicate_click = true;
                    // console.log("Duplicate tile clicked " + element + ': ' + duplicate_click)
                }

            }
            if (!duplicate_click) {
                clicked_tiles.push(tile);
            }
            // Resetting the duplicate click
            duplicate_click = false;
        }
        // If game is not active
        else {
            console.log("The game has not started")
        }
        // document.getElementById(id).style.backgroundColor = 'red';
    }

    function start_game() {
        // this function is used to start and reset game
        reset_var_shallow();
        console.log("Game is started");
    }
    function reset_game() {
        // this function is used to start and reset game
        reset_var_shallow();
        reset_var_deep();
        console.log("Game has reset!");
    }
});
