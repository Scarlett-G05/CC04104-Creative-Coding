let sound;
let sliderRate;
let sliderVol;
let sliderPan;
let circPress;
let wavePress;
let recPress;
let flarePress;
let env;
let fft;
let volHistory = [];


function setup() {
  createCanvas(500, 500); 
  angleMode(DEGREES);
  //background(0); 
  //sound = loadSound("forest_audio.mp3", loaded)
  //waveButton = createButton("wave")
  //waveButton.mousePressed(waveFunc)
  
  env = new p5.Env();
  env.setADSR(0.05,0.15,0.4,0.6)
  env.setRange(0.7,0)
  //env.play()
  
  wave = new p5.Oscillator()
  wave.setType('sine')
  wave.start()
  wave.amp(env)
  wave.freq(440)
  
  waveButton = createButton("wave")
  waveButton.mousePressed(waveFunc)  
  
  circButton =createButton("circle")
  circButton.mousePressed(circ)
  
  flareButton =createButton("flare")
  flareButton.mousePressed(flareFunc)
  
  recButton =createButton("rectangle")
  recButton.mousePressed(recFunc)
  

  
  sliderVol = createSlider(0,1,0.65,0.01)
  //sliderPan = createSlider(-1,1,0,0.01)
  sliderRate = createSlider(0,4,1,0.01)
  amp = new p5.Amplitude()
  fft = new p5.FFT()
  
}


function preload(){
  sound = loadSound("forest_audio.mp3", loaded)
}

function waveFunc(){
  circPress = false
  wavePress=true
  flarePress=false
  recPress=false
}

function circ(){
  circPress=true
  wavePress=false
  flarePress=false
  recPress=false
}

function flareFunc(){
  circPress=false
  wavePress=false
  flarePress=true
  recPress=false  
}

function recFunc(){
  circPress=false
  wavePress=false
  flarePress=false
  recPress=true 
}
//need to find a way to get 

function loaded(){
  sound.loop()
}
//A real time audio visualiser, with 4 different effects



function draw() {
  background(0); 
  let loud = amp.getLevel()
  let louder = loud*4500
  let loudness = loud*10
  volHistory.push(loudness)
  
  let spectrum = fft.analyze();
  console.log(spectrum)
    
  sound.setVolume(sliderVol.value())
  //sound.pan(sliderPan.value())
  
  sound.rate(sliderRate.value())
  let len = sound.duration()
  let rn = sound.currentTime()
  
  
  
  if(circPress == true){
    ellipse(width/2,height/2,400, louder)
  }
  else if(wavePress == true){
    stroke(200)
    noFill()
    beginShape();
    for(var i = 0; i<volHistory.length;i++){
      var y = map(volHistory[i],0,1,height,0);    
      vertex(i,y);
    }
    endShape();  
    if(volHistory.length>width){
      volHistory.splice(0,1)
    }
  }
  else if(flarePress == true){
    stroke(200)
    noFill()
    translate(width/2,height/2)
    beginShape();
    for(var p = 0; p<360;p++){
      var r = map(volHistory[p],0,1,10,100);
      var x = r*cos(p);
      var z = r*sin(p);   
      vertex(x,z);
    }
  endShape(); 
  
  if(volHistory.length>360){
    volHistory.splice(0,1)
  }
    
  }
  else if(recPress == true){
    for(let f = 0;f<spectrum.length;f++)
      rect(0,0,spectrum[f],louder)
    
  }
          
          

  
  //console.log(volHistory)
    
}

