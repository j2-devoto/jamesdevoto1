// assign players and effects to variables for the left deck
    var leftplayer = new Tone.Player("Songs/Song1Logic.wav");
    var crossFade = new Tone.CrossFade(0.5);
    var LowEqL = new Tone.Filter(100, "peaking");
    LowEqL.q = 10;
    var MidEqL = new Tone.Filter(500, "peaking");
    MidEqL.q = 10;
    var HighEqL1 = new Tone.Filter(3000, "peaking");
    MidEqL.q = 10;
    var HighEqL2 = new Tone.Filter(7000, "peaking");
    MidEqL.q = 10;
    var filterL1 = new Tone.Filter(200, "highpass");
    filterL1.frequency.value = 0;
    var reverbL = new Tone.Freeverb();
    reverbL.roomSize.value = 0.75;
    reverbL.dampening.value = 8000;
    reverbL.wet.value = 0.0;
    var phaserL = new Tone.Phaser (1, 3, 600);
    phaserL.wet.value = 0.0;
    var Lgain = new Tone.Gain (1);

// chain all effects finishing in a gain node
    leftplayer.chain(LowEqL, MidEqL, HighEqL1, HighEqL2, filterL1, reverbL, phaserL, Lgain);
// gain node at end of  chain is linked to first input of the crossfader
    Lgain.connect(crossFade, 0, 0);

// assign players and effects to variables for the right deck 
    var rightplayer = new Tone.Player("Songs/Song1Logic.wav");
    var LowEqR = new Tone.Filter(100, "peaking");
    LowEqL.q = 10;
    var MidEqR = new Tone.Filter(500, "peaking");
    MidEqL.q = 10;
    var HighEqR1 = new Tone.Filter(3000, "peaking");
    MidEqL.q = 10;
    var HighEqR2 = new Tone.Filter(7000, "peaking");
    MidEqL.q = 10;
    var filterR1 = new Tone.Filter(200, "highpass");
    filterR1.frequency.value = 0;
    var reverbR = new Tone.Freeverb();
    reverbR.roomSize.value = 0.75;
    reverbR.dampening.value = 8000;
    reverbR.wet.value = 0.0;
    var phaserR = new Tone.Phaser (1, 3, 600);
    phaserR.wet.value = 0.0;
    var Rgain = new Tone.Gain (1);


// chain all effects finishing in a gain node
    rightplayer.chain(LowEqR, MidEqR, HighEqR1, HighEqR2, filterR1, phaserR, reverbR, Rgain);

// gain node at end of  chain is linked to second  input of the crossfader
    Rgain.connect(crossFade, 0, 1);

// connect crossfade to the master
    crossFade.toMaster();
    
    // when the nexus UI system loads we call this function
    nx.onload = function() 
    {

        //set colors
        dial1.colors.fill = "#222222";
        dial2.colors.fill = "#222222";
        dial3.colors.fill = "#222222";
        dial4.colors.fill = "#222222";
        dial5.colors.fill = "#222222";
        dial6.colors.fill = "#222222";
        reverb1.colors.fill = "#222222";
        reverb2.colors.fill = "#222222";
        phaser1.colors.fill = "#222222";
        phaser2.colors.fill = "#222222";
        filter1.colors.fill = "#222222";
        filter2.colors.fill = "#222222";
        leftPitch.colors.fill = "#3f4145";
        rightPitch.colors.fill = "#3f4145";


        //set all dials and sliders min, max and initial values and
        //set them to control an effect
        dial1.min = -40;
        dial1.max = +40;
        dial1.val.value = 0;
        dial1.init();
        dial1.on("*", function(dialData){
        HighEqL1.gain.value = dialData.value;
        if(HighEqL1.gain.value > 10){
            HighEqL1.gain.value = 10;
        }
        });
        dial1.on("*", function(dialData){
        HighEqL2.gain.value = dialData.value;
        if(HighEqL2.gain.value > 10){
            HighEqL2.gain.value = 10;
        }
        });

        dial2.min = -40;
        dial2.max = +40;
        dial2.val.value = 0;
        dial2.init();
        dial2.on("*", function(dialData){
        HighEqR1.gain.value = dialData.value;
        if(HighEqR1.gain.value > 10){
            HighEqR1.gain.value = 10;
        }
        });
        dial2.on("*", function(dialData){
        HighEqR2.gain.value = dialData.value;
        if(HighEqR2.gain.value > 10){
            HighEqR2.gain.value = 10;
        }
        });

        dial3.min = -40;
        dial3.max = +40;
        dial3.val.value = 0;
        dial3.init();
        dial3.on("*", function(dialData){
        MidEqL.gain.value = dialData.value;
        if(MidEqL.gain.value > 15){
            MidEqL.gain.value = 15;
        }
        });

        dial4.min = -40;
        dial4.max = +40;
        dial4.val.valueq = 0;
        dial4.init();
        dial4.on("*", function(dialData){
        MidEqR.gain.value = dialData.value;
        if(MidEqR.gain.value > 15){
            MidEqR.gain.value = 15;
        }
        });

        dial5.min = -40;
        dial5.max = +40;
        dial5.val.value = 0;
        dial5.init();
        dial5.on("*", function(dialData){
        LowEqL.gain.value = dialData.value;
        if(LowEqL.gain.value > 15){
            LowEqL.gain.value = 15;
        }
        });

        dial6.min = -40;
        dial6.max = +40;
        dial6.val.value = 0;
        dial6.init();
        dial6.on("*", function(dialData){
        LowEqR.gain.value = dialData.value;
        if(LowEqR.gain.value > 15){
            LowEqR.gain.value = 15;
        }
        });

        reverb1.min = 0;
        reverb1.max = 0.5;
        reverb1.val.value = 0;
        reverb1.init();
        reverb1.on("*", function(dialData){
            reverbL.wet.value = dialData.value;
        });

        phaser1.min = 0;
        phaser1.max = 1;
        phaser1.val.value = 0;
        phaser1.init();
        phaser1.on("*", function(dialData){
            phaserL.wet.value = dialData.value;
        });

        phaser2.min = 0;
        phaser2.max = 1;
        phaser2.val.value = 0;
        phaser2.init();
        phaser2.on("*", function(dialData){
            phaserR.wet.value = dialData.value;
        });

        reverb2.min = 0;
        reverb2.max = 0.5;
        reverb2.val.value = 0;
        reverb2.init();
        reverb2.on("*", function(dialData){
            reverbR.wet.value = dialData.value;
        });

        filter1.min = 0;
        filter1.max = 2000;
        filter1.val.value = 0; 
        filter1.init();
        filter1.on("*", function(dialData){
            filterL1.frequency.value = dialData.value;
        });

        filter2.min = 0;
        filter2.max = 2000;
        filter2.val.value = 0; 
        filter2.init();
        filter2.on("*", function(dialData){
            filterR1.frequency.value = dialData.value;
        });

        slider1.on("*", volumeActions);
        slider1.min = -60;
        slider1.max = 0;
        slider1.val.value = 0;
        slider1.init();

        slider2.on("*", volumeActions); 
        slider2.min = -60;
        slider2.max = 0;
        slider2.val.value = 0;
        slider2.init();   

        leftPitch.on("*", lPitchActions);
        leftPitch.min = 0;
        leftPitch.max = 1;
        leftPitch.val.value = 0.5;
        leftPitch.init();

        rightPitch.on("*", rPitchActions);
        rightPitch.min = 0;
        rightPitch.max = 1;
        rightPitch.val.value = 0.5;
        rightPitch.init();

        //when vinyl is clicked open song menu

        leftVinyl.click = function(){
            var bigButtons1 = document.getElementById("bigButtons1");
            bigButtons1.style.display = "block";
        }

        rightVinyl.click = function(){
            var bigButtons2 = document.getElementById("bigButtons2");
            bigButtons2.style.display = "block";
        }

        // set default state of controls for left vinyl
        leftVinyl.defaultspeed = 0;

        // set event listener for events on the left vinyl
        leftVinyl.on("*", LvinylActions);

        // and event listener for events on the left toggle
        leftStartTog.on("*", LtoggleActions);

        // add event listener for events on the left speed inc button
        leftInc.on("*", leftIncActions);

        // add event listener for events on the left speed inc button
        leftDec.on("*", leftDecActions);

        // add event listener for events on the left speed inc button
        rightInc.on("*", rightIncActions);

        // add event listener for events on the left speed inc button
        rightDec.on("*", rightDecActions);

        // set default state of controls for Rvinyl
        rightVinyl.defaultspeed = 0;

        // set event listener for events on the Rvinyl control
        rightVinyl.on("*", RvinylActions);

        // and event listener for events on the Rtoggle button
        rightStartTog.on("*", RtoggleActions); 
        
    }

    //open help info

    function help(){
        var helpInfo = document.getElementById("helpInfo");
        helpInfo.style.display = "block";
        }

    //close help info

    function closeHelp(){
        var helpInfo = document.getElementById("helpInfo");
        helpInfo.style.display = "none";

    }

    //volume sliders

    function volumeActions() {
        leftplayer.volume.value = slider1.val.value;
        rightplayer.volume.value = slider2.val.value;
    }

    function lPitchActions(){
        leftVinyl.defaultspeed = leftPitch.val.value/10;
           }

    function rPitchActions(){
        rightVinyl.defaultspeed = rightPitch.val.value/10;
    }

    function loadLogic(){

        leftplayer.stop();

        function restartPlayerL() {
                leftplayer.start();
                leftplayer.loop = true;     
            }

        leftplayer.load("Songs/Song1Logic.wav", restartPlayerL);
        bigButtons1.style.display = "none";
    }

    function loadJoey(){

        leftplayer.stop();

        function restartPlayerL() {
                leftplayer.start();
                leftplayer.loop = true;     
            }

        leftplayer.load("Songs/Song2Joey.mp3", restartPlayerL);
        bigButtons1.style.display = "none";
    }

    function loadTribe(){

        leftplayer.stop();

        function restartPlayerL() {
                leftplayer.start();
                leftplayer.loop = true;     
            }

        leftplayer.load("Songs/Song3Tribe.mp3", restartPlayerL);
        bigButtons1.style.display = "none";
    }

    function loadMosDef(){

        leftplayer.stop();

        function restartPlayerL() {
                leftplayer.start();
                leftplayer.loop = true;     
            }

        leftplayer.load("Songs/Song4MosDef.mp3", restartPlayerL);
        bigButtons1.style.display = "none";
    }

    function loadLogic2(){

        rightplayer.stop();

        function restartPlayerR() {
                rightplayer.start();
                rightplayer.loop = true;     
            }

        rightplayer.load("Songs/Song1Logic.wav", restartPlayerR);
        bigButtons2.style.display = "none";
    }

    function loadJoey2(){

        rightplayer.stop();

        function restartPlayerR() {
                rightplayer.start();
                rightplayer.loop = true;     
            }

        rightplayer.load("Songs/Song2Joey.mp3", restartPlayerR);
        bigButtons2.style.display = "none";
    }

    function loadTribe2(){

        rightplayer.stop();

        function restartPlayerR() {
                rightplayer.start();
                rightplayer.loop = true;     
            }

        rightplayer.load("Songs/Song3Tribe.mp3", restartPlayerR);
        bigButtons2.style.display = "none";
    }

    function loadMosDef2(){

        rightplayer.stop();

        function restartPlayerR() {
                rightplayer.start();
                rightplayer.loop = true;     
            }

        rightplayer.load("Songs/Song4MosDef.mp3", restartPlayerR);
        bigButtons2.style.display = "none";
    }


    // callback for actions on the vinyl control
    var LvinylActions = function(event) {

        // are we pushing forward?
        if (leftVinyl.val.speed > 0) {
            leftplayer.reverse = false;
            leftplayer.playbackRate = leftVinyl.val.speed;
        }

        // maybe pushing backwards?
        else if (leftVinyl.val.speed < 0 ) {
            leftplayer.reverse = true;

            // playback rate must be a positive number
            leftplayer.playbackRate = (-1 * leftVinyl.val.speed); 
        }
    }

            // callback for actions on the vinyl control
    var RvinylActions = function(event) {

        // are we pushing forward?
        if (rightVinyl.val.speed > 0) {
            rightplayer.reverse = false;
            rightplayer.playbackRate = rightVinyl.val.speed;
        }

        // maybe pushing backwards?
        else if (rightVinyl.val.speed < 0 ) {
            rightplayer.reverse = true;

            // playback rate must be a positive number
            rightplayer.playbackRate = (-1 * rightVinyl.val.speed); 
        }
    }


    // callback for actions on the toggle button
    var LtoggleActions = function(event) {

        if (event.value == 1 ){
            leftVinyl.defaultspeed = leftPitch.val.value/10;
        }
        else {
            leftVinyl.defaultspeed = 0;
        }

        // if the sample player isn't running yet
        if (leftplayer.state == "stopped") {
            leftplayer.start();
        }
    }


    // callback for actions on the toggle button
    var RtoggleActions = function(event) {
        
        // set the turntable to run or stop
        // depending on the toggle button value
        if (event.value == 1 ){
            rightVinyl.defaultspeed = rightPitch.val.value/10;
        }
        else {
            rightVinyl.defaultspeed = 0;
        }

        // if the sample player isn't running yet
        if (rightplayer.state == "stopped") {
            rightplayer.start();
        }
    }

        // callback for actions on the increment button
    var leftIncActions = function(event) {

        // set the turntable to run or stop
        // depending on the toggle button value
        if (event.press == 1 ){
            leftVinyl.speed = 0.1;
        }
        else {
            leftVinyl.speed = 0.05;
        }
    }

    // callback for actions on the toggle button
    var leftDecActions = function(event) {
        
        // set the turntable to run or stop
        // depending on the toggle button value
        if (event.press == 1 ){
            leftVinyl.speed = 0.04;
        }
        else {
            leftVinyl.speed = 0.05;
        }
    }

    // callback for actions on the increment button
    var rightIncActions = function(event) {

        // set the turntable to run or stop
        // depending on the toggle button value
        if (event.press == 1 ){
            rightVinyl.speed = 0.1;
        }
        else {
            rightVinyl.speed = 0.05;
        }
    }

    // callback for actions on the toggle button
    var rightDecActions = function(event) {
        
        // set the turntable to run or stop
        // depending on the toggle button value
        if (event.press == 1 ){
            rightVinyl.speed = 0.04;
        }
        else {
            rightVinyl.speed = 0.05;
        }
    }

    var crossfader = document.getElementById("crossfader");

    crossfader.addEventListener("mousemove", crossfaderActions);
    crossfader.addEventListener("touchmove", crossfaderActions);

    function crossfaderActions(event) {
        crossFade.fade.value = crossfader.value/100.0; 
    }
