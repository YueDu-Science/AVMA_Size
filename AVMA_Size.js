/************************** 
 * Initiation_Symbol Test *
 **************************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1), (- 1), (- 1)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Letter';  // from the Builder filename that created this script
// let expInfo = {'participant': '', 'session': ''};
let expInfo = {'participant': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  text: "Welcome. Please click 'Ok' to continue.",
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const Import_StimLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Import_StimLoopBegin, Import_StimLoopScheduler);
flowScheduler.add(Import_StimLoopScheduler);
flowScheduler.add(Import_StimLoopEnd);
flowScheduler.add(Init_StimRoutineBegin());
flowScheduler.add(Init_StimRoutineEachFrame());
flowScheduler.add(Init_StimRoutineEnd());
flowScheduler.add(Instr_ExpRoutineBegin());
flowScheduler.add(Instr_ExpRoutineEachFrame());
flowScheduler.add(Instr_ExpRoutineEnd());
const Sound_Check_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Sound_Check_BoolLoopBegin, Sound_Check_BoolLoopScheduler);
flowScheduler.add(Sound_Check_BoolLoopScheduler);
flowScheduler.add(Sound_Check_BoolLoopEnd);
const RT_Hand_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(RT_Hand_BoolLoopBegin, RT_Hand_BoolLoopScheduler);
flowScheduler.add(RT_Hand_BoolLoopScheduler);
flowScheduler.add(RT_Hand_BoolLoopEnd);
const TR_Hand_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TR_Hand_BoolLoopBegin, TR_Hand_BoolLoopScheduler);
flowScheduler.add(TR_Hand_BoolLoopScheduler);
flowScheduler.add(TR_Hand_BoolLoopEnd);
const CR_Old_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(CR_Old_BoolLoopBegin, CR_Old_BoolLoopScheduler);
flowScheduler.add(CR_Old_BoolLoopScheduler);
flowScheduler.add(CR_Old_BoolLoopEnd);
const TR_Old_Pre_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TR_Old_Pre_BoolLoopBegin, TR_Old_Pre_BoolLoopScheduler);
flowScheduler.add(TR_Old_Pre_BoolLoopScheduler);
flowScheduler.add(TR_Old_Pre_BoolLoopEnd);
const RT_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(RT_BoolLoopBegin, RT_BoolLoopScheduler);
flowScheduler.add(RT_BoolLoopScheduler);
flowScheduler.add(RT_BoolLoopEnd);
const TR_Old_Post_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TR_Old_Post_BoolLoopBegin, TR_Old_Post_BoolLoopScheduler);
flowScheduler.add(TR_Old_Post_BoolLoopScheduler);
flowScheduler.add(TR_Old_Post_BoolLoopEnd);
const CR_New_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(CR_New_BoolLoopBegin, CR_New_BoolLoopScheduler);
flowScheduler.add(CR_New_BoolLoopScheduler);
flowScheduler.add(CR_New_BoolLoopEnd);
const TR_New_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TR_New_BoolLoopBegin, TR_New_BoolLoopScheduler);
flowScheduler.add(TR_New_BoolLoopScheduler);
flowScheduler.add(TR_New_BoolLoopEnd);
flowScheduler.add(Instr_End_ExpRoutineBegin());
flowScheduler.add(Instr_End_ExpRoutineEachFrame());
flowScheduler.add(Instr_End_ExpRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'media/hand.png', 'path': './media/hand.png'},
    {'name': 'conditions.xlsx', 'path': './conditions.xlsx'},
    {'name': 'media/coin.wav', 'path': './media/coin.wav'},
    {'name': 'media/buzz.wav', 'path': './media/buzz.wav'},
    {'name': 'media/beep.wav', 'path': './media/beep.wav'}
  ]
  });

// Array.prototype.append = [].push

var frameDur;
function updateInfo() {
  const browser = detectBrowser(); // detect browser

  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;
  expInfo['browser'] = browser;
  expInfo['browserInfo'] = window.navigator.userAgent;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var Import_Stim_FileClock;
var Init_StimClock;
var block_type;
var participant;
var session;
var grp_stop = 0;
var grp_swap = 1;
var sound_quit_bool = 0;
var sound_exit_bool = 0;


var beep_lead_in = 0.1;
var color_p = [(- 1), 1, (- 1)];
var color_n = [1, (- 1), (- 1)];
var corr = 0;
var rec_frame_color = [1, 1, 1];
var rec_frame_opacity = 1;
var rec_pol = 1600;
var rec_wd = 6;
var pre_trial_dur = 0.2;
var time_limit = 1.5;
var too_late_tol = 0.2;
var stop_tol = 2;
var key_list = ["h", "u", "i", "l"];
var x_symb = [0, 1, 2, 3, 4, 5, 6, 7];
var x_hand = [0,1,2,3,0,1,2,3];
var x8_new = x_symb;
var x16 = x8_new.concat(x8_new);
var remap_pairs = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]];
var subset_pairs = remap_pairs;
var num_pos = 4;
var num_symb = 8;
var num_symb_grp;
var symb_perm = permute(x_symb);
var n_map = symb_perm.length;

var symb_remap_ind;
var symb_map_ind;
var symb_map = [];
var symb_remap = [];
var symb_g_map = [];
var symb_g_remap = [];
var symb_r_map = [];
var symb_r_remap = [];
////////////////////////////////////
var tr_block_hand = 4;
var num_trials_hand = 8;
var num_trials_cr = 5000;
var num_criterion = 2;
var num_trials = 24;
var rt_block = 3;
var tr_block_old = 2;
var tr_block_new_swap = 1;
var tr_block_new_stop = 0;

var tr_hand_yes = 1;
var rt_hand_yes = 1;
var cr_old_yes = 1;
var cr_new_yes = 1;
var rt_yes = 1;
var tr_old_pre_yes = 0;
var tr_old_post_yes = 1;
var tr_new_yes = 1;
var sound_check_yes = 1;
var num_trials_sound_check = 20;


var sound_check_yes;
var sound_quit_bool;
var sound_exit_bool;
var num_trials_sound_check;
var Instr_Sound_CheckClock;
var Instr_Sound_Check_Text;
var Instr_Sound_Check_Press;
var Coin_Tone_Text;
var Buzz_Tone_Text;
var sound_check_coin;
var sound_check_buzz;
var Instr_Sound_Check_Press_Space;
var Instr_Trial_NumClock;
var Instr_Trial_Num_Text;
var Instr_Trial_Num_Press;
var Sound_Check_Press;
var Sound_Check_Sound_Play;
var Sound_Check_Play_Text;
var Sound_Check_Feedback_Text;
var Sound_Quit_TextClock;
var instr_Sound_Quit_Text;
var Sound_Exit_TextClock;
var inst_Sound_Exit_Text;
var Sound_Check_Criterion_DetClock;
var Sound_Check_FeedbackClock;
var Sound_Check_Enter_TrialClock;
var Sound_Check_Creat_StimSeqClock;
var Sound_Check_Pre_TrialClock;
var instr_sound_check_text2;
var Sound_Score;
var Sound_Score_Text;
var Sound_Score_Hint;
var Sound_check_Creat_StimSeq_Text;
var Sound_check_Creat_StimSeq_Text_Press;
var Sound_Exit_Text_Press;
//////////////////////////////////////
var grp;
var pre = 0;
var post = 0;

var timing_tol_early = 0.1;
var timing_tol_late = 0.075;

var tr_feedback_text;
var tr_penalty_text;
var StimList = [];
var hand_shape = [];
var x = [];
var y = [];
var symb = [];
var symb_g = [];
var symb_r = [];
var keynum = [];
var stimnum = [];
var key = [];

var rng1
var rng2
var rng3

var prep_time_range = [0, 1.2];
var prep_time_ind_tmp = [];
var prep_time_ind = [];
var count;
var prep_time_interval;
var Instr_ExpClock;
var Instr_Exp_Text;
var Instr_Exp_Key;
var Instr_RT_HandClock;
var Instr_RT_Hand_Rext;
var Instr_RT_Hand_Key;
var Creat_StimSeqClock;
var Pre_Trial_HandClock;
var Pre_Trial_Rec_Frame_Hand;
var Pre_Trial_HandShape;
var RT_Enter_Trial_HandClock;
var RT_Rec_Frame_Hand;
var RT_Press_Hand;
var RT_HandShape;
var RT_Stim_Hand;
var RT_Feedback_HandClock;
var RT_Feedback_Coin_Hand;
var RT_Rec_Frame_Feedback_Hand;
var RT_Feedback_HandShape;
var RT_Stim_Feedback_Hand;
var Instr_TR_HandClock;
var instr_HAND_TR_text;
var Instr_HAND_TR_press;
var Instr_Block_NumClock;
var Instr_Block_Num_Text;
var Instr_Block_Num_Press;
var TR_Enter_Trials_HandClock;
var TR_Beep_Hand;
var TR_Rec_Frame_Hand;
var TR_HandShape;
var TR_Stim_Hand;
var TR_Press_Hand;
var TR_Feedback_HandClock;
var TR_Feedback_Coin_Hand;
var TR_Coin_Hand;
var Tr_Rec_Frame_Feedback_Hand;
var TR_Feedback_Text_Hand;
var TR_Feedback_HandShape;
var TR_Stim_Feedback_Hand;
var TR_PenaltyClock;
var TR_Rec_Frame_Penalty;
var TR_Penalty_Text;
var TR_Penalty_Press;
var TR_Hand_Accuracy_BoolClock;
var Instr_CR_OldClock;
var Instr_CR_Old_Text;
var Instr_CR_Old_Press;
var Pre_TrialClock;
var Pre_Trial_Rec_Frame;
var RT_Enter_TrialClock;
var RT_Rec_Frame;
var RT_Stim_Image;
var Letter;
var RT_Press;
var RT_FeedbackClock;
var CR_Feedback_Coin_Old;
var RT_Rec_Frame_Feedback;
var RT_Feedback_Image;
var Criterion_DetClock;
var Instr_TR_Old_PreClock;
var Instr_TR_Old_Pre_text;
var Instr_TR_Old_Pre_Press;
var TR_Enter_TrialsClock;
var TR_Beep;
var TR_Rec_Frame;
var TR_Stim_Image;
var TR_Press;
var TR_FeedbackClock;
var TR_Feedback_Coin;
var TR_Coin;
var Tr_Rec_Frame_Feedback;
var TR_Feedback_Text;
var TR_Text;
var TR_Feedback_Image;
var Instr_RTClock;
var Instr_RT_Text;
var Instr_RT_Press;
var Instr_TR_Old_PostClock;
var Instr_TR_Old_Post_text;
var Instr_TR_Old_Post_Press;
var Instr_CR_NewClock;
var Instr_CR_New_Text;
var Instr_CR_New_Press;
var RT_Enter_Trial_StopClock;
var RT_Rec_Frame_Stop;
var RT_Stim_Image_Stop;
var RT_Press_Stop;
var Instr_TR_NewClock;
var Instr_TR_Old_Post_text_3;
var Instr_TR_Old_Post_Press_3;
var TR_Enter_Trials_StopClock;
var TR_Beep_Stop;
var TR_Rec_Frame_Stop;
var TR_Stim_Image_Stop;
var TR_Press_Stop;
var Instr_End_ExpClock;
var Instr_End_Exp_Text;
var Instr_End_Exp_Key;
var Text_CountDown;
var Number_CountDown;
var penalty_countdown;
var globalClock;
var routineTimer;
var CountDownClock;
var sample_num;

function experimentInit() {
  document.body.style.cursor='none';
  
  // Initialize components for Routine "Import_Stim_File"
  Import_Stim_FileClock = new util.Clock();
  // Initialize components for Routine "Init_Stim"
  Init_StimClock = new util.Clock();
  
  participant = Number.parseInt(expInfo["participant"]);
  //session = Number.parseInt(expInfo["session"]);
  session = 1;

  var myrng = new Math.seedrandom(participant);   //use new here so it does not affect Math.random()
  rng1 = myrng()
  rng2 = myrng()
  rng3 = myrng()
  
  //determine which group participants are in
  if (participant < 500 && participant > 400) {
      grp = 4;
      num_symb_grp = 4;
      tr_block_old = 2;
      tr_block_new_swap = 2;
      
  } else if (participant < 900 && participant > 800) {
      grp = 8;
      num_symb_grp = 8;
      tr_block_old = 2;
      tr_block_new_swap = 2;
  }

  // session # determines which blocks they do
  //if ((session === 1)) {
  //    rt_block = 1;
  //}
  if (grp === 8) {
  // randomize prep-time so that prep-time for each symbol spread over a good range
  for (var i = 0, _pj_a = 12; (i < _pj_a); i += 1) {
      prep_time_ind_tmp.push(i);
  }
  count = 0;
  while ((count < num_symb)) {
      util.shuffle(prep_time_ind_tmp);
      prep_time_ind.push(prep_time_ind_tmp.slice(0));
      count = (count + 1);
  }
  console.log(prep_time_ind)
  prep_time_interval = [[prep_time_range[0], 0.1], [0.1, 0.2], [0.2, 0.3], [0.3, 0.4], [0.4, 0.5], [0.5, 0.6], [0.6, 0.7], [0.7, 0.8], [0.8, 0.9], [0.9, 1], [1, 1.1], [1.1, prep_time_range[1]]];
  } else if (grp === 4) {
    sample_num = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    for (var i = 0; i<sample_num.length; ++i) {
      let LEN = sample_num[i];
      let tmp = new Array(LEN).fill(i);
      prep_time_ind_tmp = prep_time_ind_tmp.concat(tmp);
    }

    count = 0;
    while ((count < num_symb)) {
        util.shuffle(prep_time_ind_tmp);
        prep_time_ind.push(prep_time_ind_tmp.slice(0));
        count = (count + 1);
    }
    console.log(prep_time_ind)
    prep_time_interval = [[prep_time_range[0], 0.1], [0.1,0.2], [0.2, 0.3], [0.3, 0.4], [0.4, 0.5], [0.5, 0.6], [0.6, 0.7], [0.7, 0.8], [0.8, 0.9], [0.9, 1], [1, 1.1], [1.1, prep_time_range[1]]];
  }  

  // Initialize components for Routine "Instr_Exp"
  Instr_ExpClock = new util.Clock();
  Instr_Exp_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Exp_Text',
    text: 'default text',
    alignText: 'center',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Exp_Key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "Instr_Sound_Check"
  Instr_Sound_CheckClock = new util.Clock();
  Instr_Sound_Check_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Sound_Check_Text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Sound_Check_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  Coin_Tone_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Coin_Tone_Text',
    text: 'Press (f) to hear the coin sound',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.17), 0.1], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Buzz_Tone_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Buzz_Tone_Text',
    text: 'Press (j) to hear the buzzer sound',
    font: 'Arial',
    units: undefined, 
    pos: [(0.17), 0.1], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });

  Sound_Score = new visual.TextStim({
    win: psychoJS.window,
    name: 'Sound_Score',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });

  Sound_Score_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Sound_Score_Text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });

  Sound_Score_Hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'Sound_Score_Hint',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.3], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  sound_check_coin = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sound_check_coin.setVolume(1);
  sound_check_buzz = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sound_check_buzz.setVolume(1);
  Instr_Sound_Check_Press_Space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  // Initialize components for Routine "Creat_StimSeq"
  Sound_Check_Creat_StimSeqClock = new util.Clock();

  Sound_check_Creat_StimSeq_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Sound_check_Creat_StimSeq_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  Sound_check_Creat_StimSeq_Text_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "Instr_Trial_Num"
  Instr_Trial_NumClock = new util.Clock();
  Instr_Trial_Num_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Trial_Num_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Trial_Num_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pre_Trial"
  Sound_Check_Pre_TrialClock = new util.Clock();
  // Initialize components for Routine "RT_Enter_Trial"
  Sound_Check_Enter_TrialClock = new util.Clock();
  Sound_Check_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  Sound_Exit_Text_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  /* Sound_Check_Sound_Play = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  Sound_Check_Sound_Play.setVolume(1); */
  Sound_Check_Play_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Sound_Check_Play_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Sound_Check_FeedbackClock = new util.Clock();
  Sound_Check_Feedback_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Sound_Check_Feedback_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Criterion_Det"
  Sound_Check_Criterion_DetClock = new util.Clock();
  // Initialize components for Routine "Sound_Quit_Text"
  Sound_Quit_TextClock = new util.Clock();
  instr_Sound_Quit_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_Sound_Quit_Text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Sound_Exit_Text"
  Sound_Exit_TextClock = new util.Clock();
  inst_Sound_Exit_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'inst_Sound_Exit_Text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Instr_RT_Hand"
  Instr_RT_HandClock = new util.Clock();
  Instr_RT_Hand_Rext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_RT_Hand_Rext',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  Instr_RT_Hand_Key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Pre_Trial_Hand"
  Pre_Trial_HandClock = new util.Clock();
  Pre_Trial_Rec_Frame_Hand = new visual.Rect ({
    win: psychoJS.window, name: 'Pre_Trial_Rec_Frame_Hand', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  Pre_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Pre_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "RT_Enter_Trial_Hand"
  RT_Enter_Trial_HandClock = new util.Clock();
  RT_Rec_Frame_Hand = new visual.Rect ({
    win: psychoJS.window, name: 'RT_Rec_Frame_Hand', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  RT_Press_Hand = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  RT_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  RT_Stim_Hand = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Stim_Hand', units : 'height', 
    edges: 32, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "RT_Feedback_Hand"
  RT_Feedback_HandClock = new util.Clock();
  RT_Feedback_Coin_Hand = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  RT_Feedback_Coin_Hand.setVolume(1.0);
  RT_Rec_Frame_Feedback_Hand = new visual.Rect ({
    win: psychoJS.window, name: 'RT_Rec_Frame_Feedback_Hand', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  RT_Feedback_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Feedback_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  RT_Stim_Feedback_Hand = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Stim_Feedback_Hand', units : 'height', 
    edges: 32, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  // Initialize components for Routine "Instr_TR_Hand"
  Instr_TR_HandClock = new util.Clock();
  instr_HAND_TR_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_HAND_TR_text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_HAND_TR_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Instr_Block_Num"
  Instr_Block_NumClock = new util.Clock();
  Instr_Block_Num_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Block_Num_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Block_Num_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pre_Trial_Hand"
  Pre_Trial_HandClock = new util.Clock();
  Pre_Trial_Rec_Frame_Hand = new visual.Rect ({
    win: psychoJS.window, name: 'Pre_Trial_Rec_Frame_Hand', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  Pre_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Pre_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "TR_Enter_Trials_Hand"
  TR_Enter_Trials_HandClock = new util.Clock();
  TR_Beep_Hand = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  TR_Beep_Hand.setVolume(1);
  TR_Rec_Frame_Hand = new visual.Rect ({
    win: psychoJS.window, name: 'TR_Rec_Frame_Hand', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  TR_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  TR_Stim_Hand = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_Stim_Hand', units : 'height', 
    edges: 32, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  TR_Press_Hand = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TR_Feedback_Hand"
  TR_Feedback_HandClock = new util.Clock();
  TR_Feedback_Coin_Hand = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  TR_Feedback_Coin_Hand.setVolume(1.0);
  Tr_Rec_Frame_Feedback_Hand = new visual.Rect ({
    win: psychoJS.window, name: 'Tr_Rec_Frame_Feedback_Hand', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  TR_Feedback_Text_Hand = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Feedback_Text_Hand',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  TR_Feedback_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_Feedback_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  TR_Stim_Feedback_Hand = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_Stim_Feedback_Hand', units : 'height', 
    edges: 32, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "TR_Penalty"
  TR_PenaltyClock = new util.Clock();
  TR_Rec_Frame_Penalty = new visual.Rect ({
    win: psychoJS.window, name: 'TR_Rec_Frame_Penalty', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.3, depth: 0, interpolate: true,
  });
  
  TR_Penalty_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Penalty_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  TR_Penalty_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TR_Hand_Accuracy_Bool"
  TR_Hand_Accuracy_BoolClock = new util.Clock();
  // Initialize components for Routine "Instr_CR_Old"
  Instr_CR_OldClock = new util.Clock();
  Instr_CR_Old_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_CR_Old_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_CR_Old_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Rec_Frame = new visual.Rect ({
    win: psychoJS.window, name: 'Pre_Trial_Rec_Frame', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "RT_Enter_Trial"
  RT_Enter_TrialClock = new util.Clock();
  RT_Rec_Frame = new visual.Rect ({
    win: psychoJS.window, name: 'RT_Rec_Frame', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  RT_Stim_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Stim_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  RT_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Letter = new visual.TextStim({
    win: psychoJS.window,
    name: 'Letter',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.25,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });

  // Initialize components for Routine "RT_Feedback"
  RT_FeedbackClock = new util.Clock();
  CR_Feedback_Coin_Old = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  CR_Feedback_Coin_Old.setVolume(1.0);
  RT_Rec_Frame_Feedback = new visual.Rect ({
    win: psychoJS.window, name: 'RT_Rec_Frame_Feedback', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  RT_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Criterion_Det"
  Criterion_DetClock = new util.Clock();
  // Initialize components for Routine "Instr_TR_Old_Pre"
  Instr_TR_Old_PreClock = new util.Clock();
  Instr_TR_Old_Pre_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_TR_Old_Pre_text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_TR_Old_Pre_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Instr_Block_Num"
  Instr_Block_NumClock = new util.Clock();
  Instr_Block_Num_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Block_Num_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Block_Num_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Rec_Frame = new visual.Rect ({
    win: psychoJS.window, name: 'Pre_Trial_Rec_Frame', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "TR_Enter_Trials"
  TR_Enter_TrialsClock = new util.Clock();
  TR_Beep = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  TR_Beep.setVolume(1);
  TR_Rec_Frame = new visual.Rect ({
    win: psychoJS.window, name: 'TR_Rec_Frame', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  TR_Stim_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_Stim_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  TR_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TR_Feedback"
  TR_FeedbackClock = new util.Clock();
  TR_Feedback_Coin = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  TR_Feedback_Coin.setVolume(1.0);
  Tr_Rec_Frame_Feedback = new visual.Rect ({
    win: psychoJS.window, name: 'Tr_Rec_Frame_Feedback', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  TR_Feedback_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Feedback_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  TR_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "TR_Penalty"
  TR_PenaltyClock = new util.Clock();
  TR_Rec_Frame_Penalty = new visual.Rect ({
    win: psychoJS.window, name: 'TR_Rec_Frame_Penalty', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.3, depth: 0, interpolate: true,
  });
  
  TR_Penalty_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Penalty_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  TR_Penalty_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  CountDownClock = new util.Clock();
  Text_CountDown = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_CountDown',
    text: 'Beeps start in',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });

  Number_CountDown = new visual.TextStim({
    win: psychoJS.window,
    name: 'Number_CountDown',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.12,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  // Initialize components for Routine "Instr_RT"
  Instr_RTClock = new util.Clock();
  Instr_RT_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_RT_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_RT_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Instr_Block_Num"
  Instr_Block_NumClock = new util.Clock();
  Instr_Block_Num_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Block_Num_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Block_Num_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Rec_Frame = new visual.Rect ({
    win: psychoJS.window, name: 'Pre_Trial_Rec_Frame', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "RT_Enter_Trial"
  RT_Enter_TrialClock = new util.Clock();
  RT_Rec_Frame = new visual.Rect ({
    win: psychoJS.window, name: 'RT_Rec_Frame', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  RT_Stim_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Stim_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  RT_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RT_Feedback"
  RT_FeedbackClock = new util.Clock();
  CR_Feedback_Coin_Old = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  CR_Feedback_Coin_Old.setVolume(1.0);
  RT_Rec_Frame_Feedback = new visual.Rect ({
    win: psychoJS.window, name: 'RT_Rec_Frame_Feedback', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  RT_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Instr_TR_Old_Post"
  Instr_TR_Old_PostClock = new util.Clock();
  Instr_TR_Old_Post_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_TR_Old_Post_text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_TR_Old_Post_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Instr_Block_Num"
  Instr_Block_NumClock = new util.Clock();
  Instr_Block_Num_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Block_Num_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Block_Num_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Rec_Frame = new visual.Rect ({
    win: psychoJS.window, name: 'Pre_Trial_Rec_Frame', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "TR_Enter_Trials"
  TR_Enter_TrialsClock = new util.Clock();
  TR_Beep = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  TR_Beep.setVolume(1);
  TR_Rec_Frame = new visual.Rect ({
    win: psychoJS.window, name: 'TR_Rec_Frame', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  TR_Stim_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_Stim_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  TR_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TR_Feedback"
  TR_FeedbackClock = new util.Clock();
  TR_Feedback_Coin = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  TR_Feedback_Coin.setVolume(1.0);
  Tr_Rec_Frame_Feedback = new visual.Rect ({
    win: psychoJS.window, name: 'Tr_Rec_Frame_Feedback', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  TR_Feedback_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Feedback_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  TR_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "TR_Penalty"
  TR_PenaltyClock = new util.Clock();
  TR_Rec_Frame_Penalty = new visual.Rect ({
    win: psychoJS.window, name: 'TR_Rec_Frame_Penalty', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.3, depth: 0, interpolate: true,
  });
  
  TR_Penalty_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Penalty_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  TR_Penalty_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instr_CR_New"
  Instr_CR_NewClock = new util.Clock();
  Instr_CR_New_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_CR_New_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_CR_New_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Rec_Frame = new visual.Rect ({
    win: psychoJS.window, name: 'Pre_Trial_Rec_Frame', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "RT_Enter_Trial_Stop"
  RT_Enter_Trial_StopClock = new util.Clock();
  RT_Rec_Frame_Stop = new visual.Rect ({
    win: psychoJS.window, name: 'RT_Rec_Frame_Stop', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  RT_Stim_Image_Stop = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Stim_Image_Stop', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  RT_Press_Stop = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RT_Feedback"
  RT_FeedbackClock = new util.Clock();
  CR_Feedback_Coin_Old = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  CR_Feedback_Coin_Old.setVolume(1.0);
  RT_Rec_Frame_Feedback = new visual.Rect ({
    win: psychoJS.window, name: 'RT_Rec_Frame_Feedback', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  RT_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Criterion_Det"
  Criterion_DetClock = new util.Clock();
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Rec_Frame = new visual.Rect ({
    win: psychoJS.window, name: 'Pre_Trial_Rec_Frame', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "RT_Enter_Trial"
  RT_Enter_TrialClock = new util.Clock();
  RT_Rec_Frame = new visual.Rect ({
    win: psychoJS.window, name: 'RT_Rec_Frame', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  RT_Stim_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Stim_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  RT_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RT_Feedback"
  RT_FeedbackClock = new util.Clock();
  CR_Feedback_Coin_Old = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  CR_Feedback_Coin_Old.setVolume(1.0);
  RT_Rec_Frame_Feedback = new visual.Rect ({
    win: psychoJS.window, name: 'RT_Rec_Frame_Feedback', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  RT_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Criterion_Det"
  Criterion_DetClock = new util.Clock();
  // Initialize components for Routine "Instr_TR_New"
  Instr_TR_NewClock = new util.Clock();
  Instr_TR_Old_Post_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_TR_Old_Post_text_3',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_TR_Old_Post_Press_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Instr_Block_Num"
  Instr_Block_NumClock = new util.Clock();
  Instr_Block_Num_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Block_Num_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Block_Num_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Rec_Frame = new visual.Rect ({
    win: psychoJS.window, name: 'Pre_Trial_Rec_Frame', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "TR_Enter_Trials"
  TR_Enter_TrialsClock = new util.Clock();
  TR_Beep = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  TR_Beep.setVolume(1);
  TR_Rec_Frame = new visual.Rect ({
    win: psychoJS.window, name: 'TR_Rec_Frame', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  TR_Stim_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_Stim_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  TR_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TR_Feedback"
  TR_FeedbackClock = new util.Clock();
  TR_Feedback_Coin = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  TR_Feedback_Coin.setVolume(1.0);
  Tr_Rec_Frame_Feedback = new visual.Rect ({
    win: psychoJS.window, name: 'Tr_Rec_Frame_Feedback', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  TR_Feedback_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Feedback_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  TR_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "TR_Penalty"
  TR_PenaltyClock = new util.Clock();
  TR_Rec_Frame_Penalty = new visual.Rect ({
    win: psychoJS.window, name: 'TR_Rec_Frame_Penalty', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.3, depth: 0, interpolate: true,
  });
  
  TR_Penalty_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Penalty_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  TR_Penalty_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Instr_Block_Num"
  Instr_Block_NumClock = new util.Clock();
  Instr_Block_Num_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Block_Num_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Block_Num_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Rec_Frame = new visual.Rect ({
    win: psychoJS.window, name: 'Pre_Trial_Rec_Frame', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "TR_Enter_Trials_Stop"
  TR_Enter_Trials_StopClock = new util.Clock();
  TR_Beep_Stop = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  TR_Beep_Stop.setVolume(1);
  TR_Rec_Frame_Stop = new visual.Rect ({
    win: psychoJS.window, name: 'TR_Rec_Frame_Stop', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  TR_Stim_Image_Stop = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_Stim_Image_Stop', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  TR_Press_Stop = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TR_Feedback"
  TR_FeedbackClock = new util.Clock();
  TR_Feedback_Coin = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  TR_Feedback_Coin.setVolume(1.0);
  Tr_Rec_Frame_Feedback = new visual.Rect ({
    win: psychoJS.window, name: 'Tr_Rec_Frame_Feedback', units : 'height', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  TR_Feedback_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Feedback_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  TR_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "TR_Penalty"
  TR_PenaltyClock = new util.Clock();
  TR_Rec_Frame_Penalty = new visual.Rect ({
    win: psychoJS.window, name: 'TR_Rec_Frame_Penalty', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.3, depth: 0, interpolate: true,
  });
  
  TR_Penalty_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Penalty_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  TR_Penalty_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instr_End_Exp"
  Instr_End_ExpClock = new util.Clock();
  Instr_End_Exp_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_End_Exp_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_End_Exp_Key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var Import_Stim;
var currentLoop;
function Import_StimLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Import_Stim = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions.xlsx', '0:8'),
    seed: undefined, name: 'Import_Stim'
  });
  psychoJS.experiment.addLoop(Import_Stim); // add the loop to the experiment
  currentLoop = Import_Stim;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisImport_Stim of Import_Stim) {
    const snapshot = Import_Stim.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Import_Stim_FileRoutineBegin(snapshot));
    thisScheduler.add(Import_Stim_FileRoutineEachFrame(snapshot));
    thisScheduler.add(Import_Stim_FileRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function Import_StimLoopEnd() {
  psychoJS.experiment.removeLoop(Import_Stim);

  return Scheduler.Event.NEXT;
}

var Sound_Check_Bool;
function Sound_Check_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Sound_Check_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: sound_check_yes, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'Sound_Check_Bool'
  });
  psychoJS.experiment.addLoop(Sound_Check_Bool); // add the loop to the experiment
  currentLoop = Sound_Check_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSound_Check_Bool of Sound_Check_Bool) {
    const snapshot = Sound_Check_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    const Instr_Sound_Check_IterLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(Instr_Sound_Check_IterLoopBegin, Instr_Sound_Check_IterLoopScheduler);
    thisScheduler.add(Instr_Sound_Check_IterLoopScheduler);
    thisScheduler.add(Instr_Sound_Check_IterLoopEnd);
    thisScheduler.add(Sound_Check_Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Sound_Check_Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Sound_Check_Creat_StimSeqRoutineEnd(snapshot));
    const Sound_Check_IterLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(Sound_Check_IterLoopBegin, Sound_Check_IterLoopScheduler);
    thisScheduler.add(Sound_Check_IterLoopScheduler);
    thisScheduler.add(Sound_Check_IterLoopEnd);
    const Sound_Quit_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(Sound_Quit_BoolLoopBegin, Sound_Quit_BoolLoopScheduler);
    thisScheduler.add(Sound_Quit_BoolLoopScheduler);
    thisScheduler.add(Sound_Quit_BoolLoopEnd);
    const Sound_Exit_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(Sound_Exit_BoolLoopBegin, Sound_Exit_BoolLoopScheduler);
    thisScheduler.add(Sound_Exit_BoolLoopScheduler);
    thisScheduler.add(Sound_Exit_BoolLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}

var Instr_Sound_Check_Iter;
function Instr_Sound_Check_IterLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Instr_Sound_Check_Iter = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 100, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'Instr_Sound_Check_Iter'
  });
  psychoJS.experiment.addLoop(Instr_Sound_Check_Iter); // add the loop to the experiment
  currentLoop = Instr_Sound_Check_Iter;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisInstr_Sound_Check_Iter of Instr_Sound_Check_Iter) {
    const snapshot = Instr_Sound_Check_Iter.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_Sound_CheckRoutineBegin(snapshot));
    thisScheduler.add(Instr_Sound_CheckRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_Sound_CheckRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function Instr_Sound_Check_IterLoopEnd() {
  psychoJS.experiment.removeLoop(Instr_Sound_Check_Iter);

  return Scheduler.Event.NEXT;
}


var Sound_Check_Iter;
function Sound_Check_IterLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Sound_Check_Iter = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials_sound_check, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'Sound_Check_Iter'
  });
  psychoJS.experiment.addLoop(Sound_Check_Iter); // add the loop to the experiment
  currentLoop = Sound_Check_Iter;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSound_Check_Iter of Sound_Check_Iter) {
    const snapshot = Sound_Check_Iter.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
   // thisScheduler.add(Instr_Trial_NumRoutineBegin(snapshot));
   // thisScheduler.add(Instr_Trial_NumRoutineEachFrame(snapshot));
   // thisScheduler.add(Instr_Trial_NumRoutineEnd(snapshot));
    thisScheduler.add(Sound_Check_Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Sound_Check_Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Sound_Check_Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(Sound_Check_Enter_TrialRoutineBegin(snapshot));
    thisScheduler.add(Sound_Check_Enter_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Sound_Check_Enter_TrialRoutineEnd(snapshot));
    //thisScheduler.add(Sound_Check_FeedbackRoutineBegin(snapshot));
    //thisScheduler.add(Sound_Check_FeedbackRoutineEachFrame(snapshot));
    //thisScheduler.add(Sound_Check_FeedbackRoutineEnd(snapshot));
    //thisScheduler.add(Sound_Check_Criterion_DetRoutineBegin(snapshot));
    //thisScheduler.add(Sound_Check_Criterion_DetRoutineEachFrame(snapshot));
    //thisScheduler.add(Sound_Check_Criterion_DetRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function Sound_Check_IterLoopEnd() {
  psychoJS.experiment.removeLoop(Sound_Check_Iter);

  return Scheduler.Event.NEXT;
}


var Sound_Quit_Bool;
function Sound_Quit_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Sound_Quit_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: sound_quit_bool, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'Sound_Quit_Bool'
  });
  psychoJS.experiment.addLoop(Sound_Quit_Bool); // add the loop to the experiment
  currentLoop = Sound_Quit_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSound_Quit_Bool of Sound_Quit_Bool) {
    const snapshot = Sound_Quit_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Sound_Quit_TextRoutineBegin(snapshot));
    thisScheduler.add(Sound_Quit_TextRoutineEachFrame(snapshot));
    thisScheduler.add(Sound_Quit_TextRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function Sound_Quit_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(Sound_Quit_Bool);

  return Scheduler.Event.NEXT;
}


var Sound_Exit_Bool;
function Sound_Exit_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Sound_Exit_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: sound_exit_bool, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'Sound_Exit_Bool'
  });
  psychoJS.experiment.addLoop(Sound_Exit_Bool); // add the loop to the experiment
  currentLoop = Sound_Exit_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSound_Exit_Bool of Sound_Exit_Bool) {
    const snapshot = Sound_Exit_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Sound_Exit_TextRoutineBegin(snapshot));
    thisScheduler.add(Sound_Exit_TextRoutineEachFrame(snapshot));
    thisScheduler.add(Sound_Exit_TextRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function Sound_Exit_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(Sound_Exit_Bool);

  return Scheduler.Event.NEXT;
}


function Sound_Check_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(Sound_Check_Bool);

  return Scheduler.Event.NEXT;
}

var RT_Hand_Bool;
function RT_Hand_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RT_Hand_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: rt_hand_yes, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RT_Hand_Bool'
  });
  psychoJS.experiment.addLoop(RT_Hand_Bool); // add the loop to the experiment
  currentLoop = RT_Hand_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRT_Hand_Bool of RT_Hand_Bool) {
    const snapshot = RT_Hand_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_RT_HandRoutineBegin(snapshot));
    thisScheduler.add(Instr_RT_HandRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_RT_HandRoutineEnd(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    const RT_Iter_HandLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(RT_Iter_HandLoopBegin, RT_Iter_HandLoopScheduler);
    thisScheduler.add(RT_Iter_HandLoopScheduler);
    thisScheduler.add(RT_Iter_HandLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var RT_Iter_Hand;
function RT_Iter_HandLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RT_Iter_Hand = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials_hand, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RT_Iter_Hand'
  });
  psychoJS.experiment.addLoop(RT_Iter_Hand); // add the loop to the experiment
  currentLoop = RT_Iter_Hand;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRT_Iter_Hand of RT_Iter_Hand) {
    const snapshot = RT_Iter_Hand.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_Trial_HandRoutineBegin(snapshot));
    thisScheduler.add(Pre_Trial_HandRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_Trial_HandRoutineEnd(snapshot));
    thisScheduler.add(RT_Enter_Trial_HandRoutineBegin(snapshot));
    thisScheduler.add(RT_Enter_Trial_HandRoutineEachFrame(snapshot));
    thisScheduler.add(RT_Enter_Trial_HandRoutineEnd(snapshot));
    thisScheduler.add(RT_Feedback_HandRoutineBegin(snapshot));
    thisScheduler.add(RT_Feedback_HandRoutineEachFrame(snapshot));
    thisScheduler.add(RT_Feedback_HandRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function RT_Iter_HandLoopEnd() {
  psychoJS.experiment.removeLoop(RT_Iter_Hand);

  return Scheduler.Event.NEXT;
}


function RT_Hand_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(RT_Hand_Bool);

  return Scheduler.Event.NEXT;
}


var TR_Hand_Bool;
function TR_Hand_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Hand_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_hand_yes, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Hand_Bool'
  });
  psychoJS.experiment.addLoop(TR_Hand_Bool); // add the loop to the experiment
  currentLoop = TR_Hand_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Hand_Bool of TR_Hand_Bool) {
    const snapshot = TR_Hand_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_TR_HandRoutineBegin(snapshot));
    thisScheduler.add(Instr_TR_HandRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_TR_HandRoutineEnd(snapshot));
    const TR_Block_HandLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Block_HandLoopBegin, TR_Block_HandLoopScheduler);
    thisScheduler.add(TR_Block_HandLoopScheduler);
    thisScheduler.add(TR_Block_HandLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Block_Hand;
function TR_Block_HandLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Block_Hand = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_block_hand, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Block_Hand'
  });
  psychoJS.experiment.addLoop(TR_Block_Hand); // add the loop to the experiment
  currentLoop = TR_Block_Hand;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Block_Hand of TR_Block_Hand) {
    const snapshot = TR_Block_Hand.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineBegin(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEnd(snapshot));
    thisScheduler.add(CountDownRoutineBegin(snapshot));
    thisScheduler.add(CountDownRoutineEachFrame(snapshot));
    thisScheduler.add(CountDownRoutineEnd(snapshot));
    const TR_Iter_HandLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Iter_HandLoopBegin, TR_Iter_HandLoopScheduler);
    thisScheduler.add(TR_Iter_HandLoopScheduler);
    thisScheduler.add(TR_Iter_HandLoopEnd);
    thisScheduler.add(TR_Hand_Accuracy_BoolRoutineBegin(snapshot));
    thisScheduler.add(TR_Hand_Accuracy_BoolRoutineEachFrame(snapshot));
    thisScheduler.add(TR_Hand_Accuracy_BoolRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Iter_Hand;
function TR_Iter_HandLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Iter_Hand = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials_hand, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Iter_Hand'
  });
  psychoJS.experiment.addLoop(TR_Iter_Hand); // add the loop to the experiment
  currentLoop = TR_Iter_Hand;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Iter_Hand of TR_Iter_Hand) {
    const snapshot = TR_Iter_Hand.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_Trial_HandRoutineBegin(snapshot));
    thisScheduler.add(Pre_Trial_HandRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_Trial_HandRoutineEnd(snapshot));
    thisScheduler.add(TR_Enter_Trials_HandRoutineBegin(snapshot));
    thisScheduler.add(TR_Enter_Trials_HandRoutineEachFrame(snapshot));
    thisScheduler.add(TR_Enter_Trials_HandRoutineEnd(snapshot));
    const TR_Feedback_Bool_HandLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Feedback_Bool_HandLoopBegin, TR_Feedback_Bool_HandLoopScheduler);
    thisScheduler.add(TR_Feedback_Bool_HandLoopScheduler);
    thisScheduler.add(TR_Feedback_Bool_HandLoopEnd);
    const TR_Penalty_Bool_HandLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Penalty_Bool_HandLoopBegin, TR_Penalty_Bool_HandLoopScheduler);
    thisScheduler.add(TR_Penalty_Bool_HandLoopScheduler);
    thisScheduler.add(TR_Penalty_Bool_HandLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Feedback_Bool_Hand;
function TR_Feedback_Bool_HandLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Feedback_Bool_Hand = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_feedback, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Feedback_Bool_Hand'
  });
  psychoJS.experiment.addLoop(TR_Feedback_Bool_Hand); // add the loop to the experiment
  currentLoop = TR_Feedback_Bool_Hand;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Feedback_Bool_Hand of TR_Feedback_Bool_Hand) {
    const snapshot = TR_Feedback_Bool_Hand.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_Feedback_HandRoutineBegin(snapshot));
    thisScheduler.add(TR_Feedback_HandRoutineEachFrame(snapshot));
    thisScheduler.add(TR_Feedback_HandRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Feedback_Bool_HandLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Feedback_Bool_Hand);

  return Scheduler.Event.NEXT;
}


var TR_Penalty_Bool_Hand;
function TR_Penalty_Bool_HandLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Penalty_Bool_Hand = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_penalty, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Penalty_Bool_Hand'
  });
  psychoJS.experiment.addLoop(TR_Penalty_Bool_Hand); // add the loop to the experiment
  currentLoop = TR_Penalty_Bool_Hand;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Penalty_Bool_Hand of TR_Penalty_Bool_Hand) {
    const snapshot = TR_Penalty_Bool_Hand.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_PenaltyRoutineBegin(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEachFrame(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Penalty_Bool_HandLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Penalty_Bool_Hand);

  return Scheduler.Event.NEXT;
}


function TR_Iter_HandLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Iter_Hand);

  return Scheduler.Event.NEXT;
}


function TR_Block_HandLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Block_Hand);

  return Scheduler.Event.NEXT;
}


function TR_Hand_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Hand_Bool);

  return Scheduler.Event.NEXT;
}


var CR_Old_Bool;
function CR_Old_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CR_Old_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: cr_old_yes, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'CR_Old_Bool'
  });
  psychoJS.experiment.addLoop(CR_Old_Bool); // add the loop to the experiment
  currentLoop = CR_Old_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCR_Old_Bool of CR_Old_Bool) {
    const snapshot = CR_Old_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_CR_OldRoutineBegin(snapshot));
    thisScheduler.add(Instr_CR_OldRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_CR_OldRoutineEnd(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    const CR_Old_IterLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(CR_Old_IterLoopBegin, CR_Old_IterLoopScheduler);
    thisScheduler.add(CR_Old_IterLoopScheduler);
    thisScheduler.add(CR_Old_IterLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}

var CR_Old_Iter;
function CR_Old_IterLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CR_Old_Iter = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials_cr, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'CR_Old_Iter'
  });
  psychoJS.experiment.addLoop(CR_Old_Iter); // add the loop to the experiment
  currentLoop = CR_Old_Iter;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCR_Old_Iter of CR_Old_Iter) {
    const snapshot = CR_Old_Iter.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineBegin(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(Criterion_DetRoutineBegin(snapshot));
    thisScheduler.add(Criterion_DetRoutineEachFrame(snapshot));
    thisScheduler.add(Criterion_DetRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function CR_Old_IterLoopEnd() {
  psychoJS.experiment.removeLoop(CR_Old_Iter);

  return Scheduler.Event.NEXT;
}


function CR_Old_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(CR_Old_Bool);

  return Scheduler.Event.NEXT;
}


var TR_Old_Pre_Bool;
function TR_Old_Pre_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Old_Pre_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_old_pre_yes, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Old_Pre_Bool'
  });
  psychoJS.experiment.addLoop(TR_Old_Pre_Bool); // add the loop to the experiment
  currentLoop = TR_Old_Pre_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Old_Pre_Bool of TR_Old_Pre_Bool) {
    const snapshot = TR_Old_Pre_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_TR_Old_PreRoutineBegin(snapshot));
    thisScheduler.add(Instr_TR_Old_PreRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_TR_Old_PreRoutineEnd(snapshot));
    const TR_Old_Block_PreLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Old_Block_PreLoopBegin, TR_Old_Block_PreLoopScheduler);
    thisScheduler.add(TR_Old_Block_PreLoopScheduler);
    thisScheduler.add(TR_Old_Block_PreLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Old_Block_Pre;
function TR_Old_Block_PreLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Old_Block_Pre = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_block_old, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Old_Block_Pre'
  });
  psychoJS.experiment.addLoop(TR_Old_Block_Pre); // add the loop to the experiment
  currentLoop = TR_Old_Block_Pre;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Old_Block_Pre of TR_Old_Block_Pre) {
    const snapshot = TR_Old_Block_Pre.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineBegin(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEnd(snapshot));
    thisScheduler.add(CountDownRoutineBegin(snapshot));
    thisScheduler.add(CountDownRoutineEachFrame(snapshot));
    thisScheduler.add(CountDownRoutineEnd(snapshot));
    const TR_Iter_Old_PreLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Iter_Old_PreLoopBegin, TR_Iter_Old_PreLoopScheduler);
    thisScheduler.add(TR_Iter_Old_PreLoopScheduler);
    thisScheduler.add(TR_Iter_Old_PreLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Iter_Old_Pre;
function TR_Iter_Old_PreLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Iter_Old_Pre = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Iter_Old_Pre'
  });
  psychoJS.experiment.addLoop(TR_Iter_Old_Pre); // add the loop to the experiment
  currentLoop = TR_Iter_Old_Pre;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Iter_Old_Pre of TR_Iter_Old_Pre) {
    const snapshot = TR_Iter_Old_Pre.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(TR_Enter_TrialsRoutineBegin(snapshot));
    thisScheduler.add(TR_Enter_TrialsRoutineEachFrame(snapshot));
    thisScheduler.add(TR_Enter_TrialsRoutineEnd(snapshot));
    const TR_Feedback_Old_Pre_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Feedback_Old_Pre_BoolLoopBegin, TR_Feedback_Old_Pre_BoolLoopScheduler);
    thisScheduler.add(TR_Feedback_Old_Pre_BoolLoopScheduler);
    thisScheduler.add(TR_Feedback_Old_Pre_BoolLoopEnd);
    const TR_Penalty_Old_Pre_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Penalty_Old_Pre_BoolLoopBegin, TR_Penalty_Old_Pre_BoolLoopScheduler);
    thisScheduler.add(TR_Penalty_Old_Pre_BoolLoopScheduler);
    thisScheduler.add(TR_Penalty_Old_Pre_BoolLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Feedback_Old_Pre_Bool;
function TR_Feedback_Old_Pre_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Feedback_Old_Pre_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_feedback, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Feedback_Old_Pre_Bool'
  });
  psychoJS.experiment.addLoop(TR_Feedback_Old_Pre_Bool); // add the loop to the experiment
  currentLoop = TR_Feedback_Old_Pre_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Feedback_Old_Pre_Bool of TR_Feedback_Old_Pre_Bool) {
    const snapshot = TR_Feedback_Old_Pre_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(TR_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(TR_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Feedback_Old_Pre_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Feedback_Old_Pre_Bool);

  return Scheduler.Event.NEXT;
}


var TR_Penalty_Old_Pre_Bool;
function TR_Penalty_Old_Pre_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Penalty_Old_Pre_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_penalty, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Penalty_Old_Pre_Bool'
  });
  psychoJS.experiment.addLoop(TR_Penalty_Old_Pre_Bool); // add the loop to the experiment
  currentLoop = TR_Penalty_Old_Pre_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Penalty_Old_Pre_Bool of TR_Penalty_Old_Pre_Bool) {
    const snapshot = TR_Penalty_Old_Pre_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_PenaltyRoutineBegin(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEachFrame(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Penalty_Old_Pre_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Penalty_Old_Pre_Bool);

  return Scheduler.Event.NEXT;
}


function TR_Iter_Old_PreLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Iter_Old_Pre);

  return Scheduler.Event.NEXT;
}


function TR_Old_Block_PreLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Old_Block_Pre);

  return Scheduler.Event.NEXT;
}


function TR_Old_Pre_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Old_Pre_Bool);

  return Scheduler.Event.NEXT;
}


var RT_Bool;
function RT_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RT_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: rt_yes, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RT_Bool'
  });
  psychoJS.experiment.addLoop(RT_Bool); // add the loop to the experiment
  currentLoop = RT_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRT_Bool of RT_Bool) {
    const snapshot = RT_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_RTRoutineBegin(snapshot));
    thisScheduler.add(Instr_RTRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_RTRoutineEnd(snapshot));
    const RT_BlockLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(RT_BlockLoopBegin, RT_BlockLoopScheduler);
    thisScheduler.add(RT_BlockLoopScheduler);
    thisScheduler.add(RT_BlockLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var RT_Block;
function RT_BlockLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RT_Block = new TrialHandler({
    psychoJS: psychoJS,
    nReps: rt_block, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RT_Block'
  });
  psychoJS.experiment.addLoop(RT_Block); // add the loop to the experiment
  currentLoop = RT_Block;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRT_Block of RT_Block) {
    const snapshot = RT_Block.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineBegin(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEnd(snapshot));
    const RT_IterLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(RT_IterLoopBegin, RT_IterLoopScheduler);
    thisScheduler.add(RT_IterLoopScheduler);
    thisScheduler.add(RT_IterLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var RT_Iter;
function RT_IterLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RT_Iter = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RT_Iter'
  });
  psychoJS.experiment.addLoop(RT_Iter); // add the loop to the experiment
  currentLoop = RT_Iter;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRT_Iter of RT_Iter) {
    const snapshot = RT_Iter.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineBegin(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function RT_IterLoopEnd() {
  psychoJS.experiment.removeLoop(RT_Iter);

  return Scheduler.Event.NEXT;
}


function RT_BlockLoopEnd() {
  psychoJS.experiment.removeLoop(RT_Block);

  return Scheduler.Event.NEXT;
}


function RT_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(RT_Bool);

  return Scheduler.Event.NEXT;
}


var TR_Old_Post_Bool;
function TR_Old_Post_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Old_Post_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_old_post_yes, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Old_Post_Bool'
  });
  psychoJS.experiment.addLoop(TR_Old_Post_Bool); // add the loop to the experiment
  currentLoop = TR_Old_Post_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Old_Post_Bool of TR_Old_Post_Bool) {
    const snapshot = TR_Old_Post_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_TR_Old_PostRoutineBegin(snapshot));
    thisScheduler.add(Instr_TR_Old_PostRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_TR_Old_PostRoutineEnd(snapshot));
    const TR_Old_Block_PostLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Old_Block_PostLoopBegin, TR_Old_Block_PostLoopScheduler);
    thisScheduler.add(TR_Old_Block_PostLoopScheduler);
    thisScheduler.add(TR_Old_Block_PostLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Old_Block_Post;
function TR_Old_Block_PostLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Old_Block_Post = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_block_old, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Old_Block_Post'
  });
  psychoJS.experiment.addLoop(TR_Old_Block_Post); // add the loop to the experiment
  currentLoop = TR_Old_Block_Post;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Old_Block_Post of TR_Old_Block_Post) {
    const snapshot = TR_Old_Block_Post.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineBegin(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEnd(snapshot));
    thisScheduler.add(CountDownRoutineBegin(snapshot));
    thisScheduler.add(CountDownRoutineEachFrame(snapshot));
    thisScheduler.add(CountDownRoutineEnd(snapshot));
    const TR_Iter_Old_PostLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Iter_Old_PostLoopBegin, TR_Iter_Old_PostLoopScheduler);
    thisScheduler.add(TR_Iter_Old_PostLoopScheduler);
    thisScheduler.add(TR_Iter_Old_PostLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Iter_Old_Post;
function TR_Iter_Old_PostLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Iter_Old_Post = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Iter_Old_Post'
  });
  psychoJS.experiment.addLoop(TR_Iter_Old_Post); // add the loop to the experiment
  currentLoop = TR_Iter_Old_Post;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Iter_Old_Post of TR_Iter_Old_Post) {
    const snapshot = TR_Iter_Old_Post.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(TR_Enter_TrialsRoutineBegin(snapshot));
    thisScheduler.add(TR_Enter_TrialsRoutineEachFrame(snapshot));
    thisScheduler.add(TR_Enter_TrialsRoutineEnd(snapshot));
    const TR_Feedback_Old_Post_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Feedback_Old_Post_BoolLoopBegin, TR_Feedback_Old_Post_BoolLoopScheduler);
    thisScheduler.add(TR_Feedback_Old_Post_BoolLoopScheduler);
    thisScheduler.add(TR_Feedback_Old_Post_BoolLoopEnd);
    const TR_Penalty_Old_Post_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Penalty_Old_Post_BoolLoopBegin, TR_Penalty_Old_Post_BoolLoopScheduler);
    thisScheduler.add(TR_Penalty_Old_Post_BoolLoopScheduler);
    thisScheduler.add(TR_Penalty_Old_Post_BoolLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Feedback_Old_Post_Bool;
function TR_Feedback_Old_Post_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Feedback_Old_Post_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_feedback, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Feedback_Old_Post_Bool'
  });
  psychoJS.experiment.addLoop(TR_Feedback_Old_Post_Bool); // add the loop to the experiment
  currentLoop = TR_Feedback_Old_Post_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Feedback_Old_Post_Bool of TR_Feedback_Old_Post_Bool) {
    const snapshot = TR_Feedback_Old_Post_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(TR_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(TR_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Feedback_Old_Post_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Feedback_Old_Post_Bool);

  return Scheduler.Event.NEXT;
}


var TR_Penalty_Old_Post_Bool;
function TR_Penalty_Old_Post_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Penalty_Old_Post_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_penalty, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Penalty_Old_Post_Bool'
  });
  psychoJS.experiment.addLoop(TR_Penalty_Old_Post_Bool); // add the loop to the experiment
  currentLoop = TR_Penalty_Old_Post_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Penalty_Old_Post_Bool of TR_Penalty_Old_Post_Bool) {
    const snapshot = TR_Penalty_Old_Post_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_PenaltyRoutineBegin(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEachFrame(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Penalty_Old_Post_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Penalty_Old_Post_Bool);

  return Scheduler.Event.NEXT;
}


function TR_Iter_Old_PostLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Iter_Old_Post);

  return Scheduler.Event.NEXT;
}


function TR_Old_Block_PostLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Old_Block_Post);

  return Scheduler.Event.NEXT;
}


function TR_Old_Post_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Old_Post_Bool);

  return Scheduler.Event.NEXT;
}


var CR_New_Bool;
function CR_New_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CR_New_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: cr_new_yes, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'CR_New_Bool'
  });
  psychoJS.experiment.addLoop(CR_New_Bool); // add the loop to the experiment
  currentLoop = CR_New_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCR_New_Bool of CR_New_Bool) {
    const snapshot = CR_New_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_CR_NewRoutineBegin(snapshot));
    thisScheduler.add(Instr_CR_NewRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_CR_NewRoutineEnd(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    const CR_Grp_Stop_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(CR_Grp_Stop_BoolLoopBegin, CR_Grp_Stop_BoolLoopScheduler);
    thisScheduler.add(CR_Grp_Stop_BoolLoopScheduler);
    thisScheduler.add(CR_Grp_Stop_BoolLoopEnd);
    const CR_Grp_Swap_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(CR_Grp_Swap_BoolLoopBegin, CR_Grp_Swap_BoolLoopScheduler);
    thisScheduler.add(CR_Grp_Swap_BoolLoopScheduler);
    thisScheduler.add(CR_Grp_Swap_BoolLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var CR_Grp_Stop_Bool;
function CR_Grp_Stop_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CR_Grp_Stop_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: grp_stop, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'CR_Grp_Stop_Bool'
  });
  psychoJS.experiment.addLoop(CR_Grp_Stop_Bool); // add the loop to the experiment
  currentLoop = CR_Grp_Stop_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCR_Grp_Stop_Bool of CR_Grp_Stop_Bool) {
    const snapshot = CR_Grp_Stop_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    const CR_New_Iter_StopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(CR_New_Iter_StopLoopBegin, CR_New_Iter_StopLoopScheduler);
    thisScheduler.add(CR_New_Iter_StopLoopScheduler);
    thisScheduler.add(CR_New_Iter_StopLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var CR_New_Iter_Stop;
function CR_New_Iter_StopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CR_New_Iter_Stop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials_cr, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'CR_New_Iter_Stop'
  });
  psychoJS.experiment.addLoop(CR_New_Iter_Stop); // add the loop to the experiment
  currentLoop = CR_New_Iter_Stop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCR_New_Iter_Stop of CR_New_Iter_Stop) {
    const snapshot = CR_New_Iter_Stop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_Enter_Trial_StopRoutineBegin(snapshot));
    thisScheduler.add(RT_Enter_Trial_StopRoutineEachFrame(snapshot));
    thisScheduler.add(RT_Enter_Trial_StopRoutineEnd(snapshot));
    thisScheduler.add(RT_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(Criterion_DetRoutineBegin(snapshot));
    thisScheduler.add(Criterion_DetRoutineEachFrame(snapshot));
    thisScheduler.add(Criterion_DetRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function CR_New_Iter_StopLoopEnd() {
  psychoJS.experiment.removeLoop(CR_New_Iter_Stop);

  return Scheduler.Event.NEXT;
}


function CR_Grp_Stop_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(CR_Grp_Stop_Bool);

  return Scheduler.Event.NEXT;
}


var CR_Grp_Swap_Bool;
function CR_Grp_Swap_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CR_Grp_Swap_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: grp_swap, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'CR_Grp_Swap_Bool'
  });
  psychoJS.experiment.addLoop(CR_Grp_Swap_Bool); // add the loop to the experiment
  currentLoop = CR_Grp_Swap_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCR_Grp_Swap_Bool of CR_Grp_Swap_Bool) {
    const snapshot = CR_Grp_Swap_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    const CR_New_Iter_SwapLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(CR_New_Iter_SwapLoopBegin, CR_New_Iter_SwapLoopScheduler);
    thisScheduler.add(CR_New_Iter_SwapLoopScheduler);
    thisScheduler.add(CR_New_Iter_SwapLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var CR_New_Iter_Swap;
function CR_New_Iter_SwapLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CR_New_Iter_Swap = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials_cr, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'CR_New_Iter_Swap'
  });
  psychoJS.experiment.addLoop(CR_New_Iter_Swap); // add the loop to the experiment
  currentLoop = CR_New_Iter_Swap;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCR_New_Iter_Swap of CR_New_Iter_Swap) {
    const snapshot = CR_New_Iter_Swap.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineBegin(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(Criterion_DetRoutineBegin(snapshot));
    thisScheduler.add(Criterion_DetRoutineEachFrame(snapshot));
    thisScheduler.add(Criterion_DetRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function CR_New_Iter_SwapLoopEnd() {
  psychoJS.experiment.removeLoop(CR_New_Iter_Swap);

  return Scheduler.Event.NEXT;
}


function CR_Grp_Swap_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(CR_Grp_Swap_Bool);

  return Scheduler.Event.NEXT;
}


function CR_New_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(CR_New_Bool);

  return Scheduler.Event.NEXT;
}


var TR_New_Bool;
function TR_New_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_New_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_new_yes, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_New_Bool'
  });
  psychoJS.experiment.addLoop(TR_New_Bool); // add the loop to the experiment
  currentLoop = TR_New_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_New_Bool of TR_New_Bool) {
    const snapshot = TR_New_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_TR_NewRoutineBegin(snapshot));
    thisScheduler.add(Instr_TR_NewRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_TR_NewRoutineEnd(snapshot));
    const TR_New_Block_SwapLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_New_Block_SwapLoopBegin, TR_New_Block_SwapLoopScheduler);
    thisScheduler.add(TR_New_Block_SwapLoopScheduler);
    thisScheduler.add(TR_New_Block_SwapLoopEnd);
    const TR_New_Block_StopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_New_Block_StopLoopBegin, TR_New_Block_StopLoopScheduler);
    thisScheduler.add(TR_New_Block_StopLoopScheduler);
    thisScheduler.add(TR_New_Block_StopLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_New_Block_Swap;
function TR_New_Block_SwapLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_New_Block_Swap = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_block_new_swap, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_New_Block_Swap'
  });
  psychoJS.experiment.addLoop(TR_New_Block_Swap); // add the loop to the experiment
  currentLoop = TR_New_Block_Swap;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_New_Block_Swap of TR_New_Block_Swap) {
    const snapshot = TR_New_Block_Swap.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineBegin(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEnd(snapshot));
    thisScheduler.add(CountDownRoutineBegin(snapshot));
    thisScheduler.add(CountDownRoutineEachFrame(snapshot));
    thisScheduler.add(CountDownRoutineEnd(snapshot));
    const TR_Iter_New_SwapLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Iter_New_SwapLoopBegin, TR_Iter_New_SwapLoopScheduler);
    thisScheduler.add(TR_Iter_New_SwapLoopScheduler);
    thisScheduler.add(TR_Iter_New_SwapLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Iter_New_Swap;
function TR_Iter_New_SwapLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Iter_New_Swap = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Iter_New_Swap'
  });
  psychoJS.experiment.addLoop(TR_Iter_New_Swap); // add the loop to the experiment
  currentLoop = TR_Iter_New_Swap;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Iter_New_Swap of TR_Iter_New_Swap) {
    const snapshot = TR_Iter_New_Swap.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(TR_Enter_TrialsRoutineBegin(snapshot));
    thisScheduler.add(TR_Enter_TrialsRoutineEachFrame(snapshot));
    thisScheduler.add(TR_Enter_TrialsRoutineEnd(snapshot));
    const TR_Feedback_New_Swap_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Feedback_New_Swap_BoolLoopBegin, TR_Feedback_New_Swap_BoolLoopScheduler);
    thisScheduler.add(TR_Feedback_New_Swap_BoolLoopScheduler);
    thisScheduler.add(TR_Feedback_New_Swap_BoolLoopEnd);
    const TR_Penalty_New_Swap_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Penalty_New_Swap_BoolLoopBegin, TR_Penalty_New_Swap_BoolLoopScheduler);
    thisScheduler.add(TR_Penalty_New_Swap_BoolLoopScheduler);
    thisScheduler.add(TR_Penalty_New_Swap_BoolLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Feedback_New_Swap_Bool;
function TR_Feedback_New_Swap_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Feedback_New_Swap_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_feedback, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Feedback_New_Swap_Bool'
  });
  psychoJS.experiment.addLoop(TR_Feedback_New_Swap_Bool); // add the loop to the experiment
  currentLoop = TR_Feedback_New_Swap_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Feedback_New_Swap_Bool of TR_Feedback_New_Swap_Bool) {
    const snapshot = TR_Feedback_New_Swap_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(TR_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(TR_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Feedback_New_Swap_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Feedback_New_Swap_Bool);

  return Scheduler.Event.NEXT;
}


var TR_Penalty_New_Swap_Bool;
function TR_Penalty_New_Swap_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Penalty_New_Swap_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_penalty, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Penalty_New_Swap_Bool'
  });
  psychoJS.experiment.addLoop(TR_Penalty_New_Swap_Bool); // add the loop to the experiment
  currentLoop = TR_Penalty_New_Swap_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Penalty_New_Swap_Bool of TR_Penalty_New_Swap_Bool) {
    const snapshot = TR_Penalty_New_Swap_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_PenaltyRoutineBegin(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEachFrame(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Penalty_New_Swap_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Penalty_New_Swap_Bool);

  return Scheduler.Event.NEXT;
}


function TR_Iter_New_SwapLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Iter_New_Swap);

  return Scheduler.Event.NEXT;
}


function TR_New_Block_SwapLoopEnd() {
  psychoJS.experiment.removeLoop(TR_New_Block_Swap);

  return Scheduler.Event.NEXT;
}


var TR_New_Block_Stop;
function TR_New_Block_StopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_New_Block_Stop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_block_new_stop, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_New_Block_Stop'
  });
  psychoJS.experiment.addLoop(TR_New_Block_Stop); // add the loop to the experiment
  currentLoop = TR_New_Block_Stop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_New_Block_Stop of TR_New_Block_Stop) {
    const snapshot = TR_New_Block_Stop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineBegin(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEnd(snapshot));
    const TR_Iter_New_StopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Iter_New_StopLoopBegin, TR_Iter_New_StopLoopScheduler);
    thisScheduler.add(TR_Iter_New_StopLoopScheduler);
    thisScheduler.add(TR_Iter_New_StopLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Iter_New_Stop;
function TR_Iter_New_StopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Iter_New_Stop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Iter_New_Stop'
  });
  psychoJS.experiment.addLoop(TR_Iter_New_Stop); // add the loop to the experiment
  currentLoop = TR_Iter_New_Stop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Iter_New_Stop of TR_Iter_New_Stop) {
    const snapshot = TR_Iter_New_Stop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(TR_Enter_Trials_StopRoutineBegin(snapshot));
    thisScheduler.add(TR_Enter_Trials_StopRoutineEachFrame(snapshot));
    thisScheduler.add(TR_Enter_Trials_StopRoutineEnd(snapshot));
    const TR_Feedback_New_Stop_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Feedback_New_Stop_BoolLoopBegin, TR_Feedback_New_Stop_BoolLoopScheduler);
    thisScheduler.add(TR_Feedback_New_Stop_BoolLoopScheduler);
    thisScheduler.add(TR_Feedback_New_Stop_BoolLoopEnd);
    const TR_Penalty_New_Stop_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Penalty_New_Stop_BoolLoopBegin, TR_Penalty_New_Stop_BoolLoopScheduler);
    thisScheduler.add(TR_Penalty_New_Stop_BoolLoopScheduler);
    thisScheduler.add(TR_Penalty_New_Stop_BoolLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Feedback_New_Stop_Bool;
function TR_Feedback_New_Stop_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Feedback_New_Stop_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_feedback, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Feedback_New_Stop_Bool'
  });
  psychoJS.experiment.addLoop(TR_Feedback_New_Stop_Bool); // add the loop to the experiment
  currentLoop = TR_Feedback_New_Stop_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Feedback_New_Stop_Bool of TR_Feedback_New_Stop_Bool) {
    const snapshot = TR_Feedback_New_Stop_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(TR_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(TR_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Feedback_New_Stop_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Feedback_New_Stop_Bool);

  return Scheduler.Event.NEXT;
}


var TR_Penalty_New_Stop_Bool;
function TR_Penalty_New_Stop_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Penalty_New_Stop_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_penalty, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Penalty_New_Stop_Bool'
  });
  psychoJS.experiment.addLoop(TR_Penalty_New_Stop_Bool); // add the loop to the experiment
  currentLoop = TR_Penalty_New_Stop_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Penalty_New_Stop_Bool of TR_Penalty_New_Stop_Bool) {
    const snapshot = TR_Penalty_New_Stop_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_PenaltyRoutineBegin(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEachFrame(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Penalty_New_Stop_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Penalty_New_Stop_Bool);

  return Scheduler.Event.NEXT;
}


function TR_Iter_New_StopLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Iter_New_Stop);

  return Scheduler.Event.NEXT;
}


function TR_New_Block_StopLoopEnd() {
  psychoJS.experiment.removeLoop(TR_New_Block_Stop);

  return Scheduler.Event.NEXT;
}


function TR_New_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_New_Bool);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var Import_Stim_FileComponents;
function Import_Stim_FileRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Import_Stim_File'-------
    t = 0;
    Import_Stim_FileClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    Import_Stim_FileComponents = [];
    
    for (const thisComponent of Import_Stim_FileComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function Import_Stim_FileRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Import_Stim_File'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Import_Stim_FileClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Import_Stim_FileComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Import_Stim_FileRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Import_Stim_File'-------
    for (const thisComponent of Import_Stim_FileComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Import_Stim_File" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var coin;
var beep;
var buzz;
var symb_map_rnd;
var remap_pair_rnd;
var remap_pair_1 = [];
var remap_pair_2 = [];
var subset;
var subset_dummie;
var subset_pair_rnd;
var subset_pair_1 = [];
var subset_pair_2 = [];
var Init_StimComponents;
function Init_StimRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Init_Stim'-------
    t = 0;
    Init_StimClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    
    StimList = Import_Stim.trialList;
    hand_shape = StimList[0]["Hand"];
    coin = StimList[0]["Sound_P"];
    buzz = StimList[0]["Sound_N"];
    beep = StimList[0]["Beep"];
    for (var i = 0, _pj_a = num_symb; (i < _pj_a); i += 1) {
        stimnum.push(StimList[i]["StimNum"]);
        symb.push(StimList[i]["Symb"]);
        //symb_r.push(StimList[i]["Symb_R"]);
        //symb_g.push(StimList[i]["Symb_G"]);
        key.push(StimList[i]["Key"]);
        keynum.push(StimList[i]["KeyNum"]);
        x.push(StimList[i]["X_pos"]);
        y.push(StimList[i]["Y_pos"]);
    }


    // Despite the gtoup, the original map involves all 8 elements
    symb_map_ind = [0, 1, 2, 3, 4, 5, 6, 7];

    remap_pair_rnd = Math.floor(rng3 * remap_pairs.length)
    remap_pair_1 = remap_pairs[remap_pair_rnd];
    for (i = 0, _pj_a = 4; (i < _pj_a); i += 1) {
        if  (!(remap_pair_1.includes(i))) {
            remap_pair_2.push((i + 4));
        }
    }
    symb_remap_ind = Object.assign({}, symb_map_ind);
    

    // create subset symb_map_ind for both grp 4 and grp 8
    // for group 4, subsets are the same as remap_pairs with rng3
    if (grp === 8) {
      subset_pair_1 = [0,1,2,3]
      subset_pair_2 = [4,5,6,7]
      subset = [0, 1, 2, 3, 4, 5, 6, 7];
      subset_dummie = Object.values(subset);
    } else if (grp === 4) {
      //first randomly choose a subset
      subset_pair_rnd = Math.floor(rng3 * subset_pairs.length)
      subset_pair_1 = subset_pairs[subset_pair_rnd];
      for (i = 0, _pj_a = 4; (i < _pj_a); i += 1) {
        if  (!(subset_pair_1.includes(i))) {
            subset_pair_2.push((i + 4));
        }
      }

      // concat two pairs
      subset = subset_pair_1.concat(subset_pair_2);
      subset_dummie = Object.values(subset);
    }

    // now decide which pair will be swapped for group 4 and group 8
    if (grp === 8) {
      symb_remap_ind[remap_pair_1[0]] = symb_map_ind[remap_pair_1[1]];
      symb_remap_ind[remap_pair_1[1]] = symb_map_ind[remap_pair_1[0]];
      symb_remap_ind[remap_pair_2[0]] = symb_map_ind[remap_pair_2[1]];
      symb_remap_ind[remap_pair_2[1]] = symb_map_ind[remap_pair_2[0]];
    } else if (grp === 4) {
      if (rng1 < 0.5) {
        symb_remap_ind[remap_pair_1[0]] = symb_map_ind[remap_pair_1[1]];
        symb_remap_ind[remap_pair_1[1]] = symb_map_ind[remap_pair_1[0]];
      } else if (rng1 >= 0.5) {
        symb_remap_ind[remap_pair_2[0]] = symb_map_ind[remap_pair_2[1]];
        symb_remap_ind[remap_pair_2[1]] = symb_map_ind[remap_pair_2[0]];
      }
    }
    
    for (var i = 0, _pj_a = num_symb; (i < _pj_a); i += 1) {
      symb_map.push(symb[symb_map_ind[i]]);
      symb_remap.push(symb[symb_remap_ind[i]]);
      //symb_g_map.push(symb_g[symb_map_ind[i]]);
      //symb_g_remap.push(symb_g[symb_remap_ind[i]]);
      //symb_r_map.push(symb_r[symb_map_ind[i]]);
      //symb_r_remap.push(symb_r[symb_remap_ind[i]]);
    }
    
    //symb_map_rnd = Math.floor(rng2 * symb_perm.length) // random interger between 0 and num_symb - 1
    //symb_map_ind = symb_perm[symb_map_rnd];
    //symb_map_ind = x_symb;
    
    psychoJS.experiment.addData("Subset_Pair_1", subset_pair_1);
    psychoJS.experiment.addData("Subset_Pair_2", subset_pair_2);
    psychoJS.experiment.addData("Subset", subset);
    psychoJS.experiment.addData("symb_map", symb_map_ind);
    psychoJS.experiment.addData("symb_remap", symb_remap_ind);
    psychoJS.experiment.addData("Remap_Pair_1", remap_pair_1);
    psychoJS.experiment.addData("Remap_Pair_2", remap_pair_2);
    

    
    // keep track of which components have finished
    Init_StimComponents = [];
    
    for (const thisComponent of Init_StimComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function Init_StimRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Init_Stim'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Init_StimClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Init_StimComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

var instr_end_exp_text;
var instr_exp_text;
var instr_rt_text_hand;
var instr_tr_text_hand;
var instr_cr_old_text;
var instr_rt_text;
var instr_tr_old_pre_text;
var instr_tr_old_post_text;
var instr_cr_new_text;
var instr_tr_new_text;
var penalty_toolate_text;
var penalty_tooearly_text;
var feedback_early_text;
var feedback_late_text;
var feedback_good_text;
var instr_sound_quit_text;
var instr_sound_exit_text;
var instr_sound_select_text;
var instr_sound_check_text;
var instr_sound_check_feedback_P_text;
var instr_sound_check_feedback_N_text;
var instr_sound_check_feedback_NO_text;
function Init_StimRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Init_Stim'-------
    for (const thisComponent of Init_StimComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }

    instr_end_exp_text = `Great job! You have completed the task.
    
Press (space) to proceed so that your data can be saved. The saving process may take up to 1 minute.

After the data are saved, click 'OK' to exit and close the webpage.`
    ;

    instr_exp_text = `Thank you for participating in our study!
    
This study will take about 1 hour and 20 minutes. 

Once you start, you can take a break between rounds, Please DO NOT turn off your web browser until you complete the task, unless you decide to withdraw from this study.
    


Press (space) to continue.`
    ;
    instr_rt_text_hand = `The upcoming 3 blocks are used to help you get familiar with the task.
    
With your Right hand, place your Index, Middle, Ring, and Pinky fingers on (H, U, I, L) respectively. Your fingers will rest on these keys for the entirety of the experiment.
    
You will see a hand appear on the screen. One of the fingers on the screen will light up and your job is to press the corresponding finger as quickly and as accurately as possible.
    


Press (H, U, I, or L) to continue.`
    ;
    instr_tr_text_hand = `Great Job!
    
In the following blocks, you will hear 4 beeps. You need to press the corresponding finger ON the fourth beep. 


Sometimes, the finger will light up at the very last second. You will not have enough time to know which finger to press. In this case, MAKE A GUESS. Always press one of your fingers ON the fourth beep.


There will be at least 2 blocks, depending on how well you press ON the fourth beep.


Press (H, U, I, or L) to continue.`
    ;
    instr_cr_old_text = `Good Job! You are now ready for the tasks!
    
In the upcoming block, you will see eight symbols (1, 2, 3, 4, a, b, c, d) on the screen, one at a time. 

Each symbol corresponds to one of (H, U, I, L). For example, press key (H) to symbols (1) and (a), press key (U) to symbols (2) and (b), and so on.

ACCURACY is the priority, so go as slowly as you need to. The more mistakes you make, the longer this block will take.
    


Ready? Press (H, U, I, or L) to continue.`
    ;
    if ((session === 1)) {
        instr_rt_text = `Now you are going to practice the symbol-key map you learned. 
        
Your job is to press the corresponding key as quickly and as accurately as possible.
    
There will be ${rt_block} blocks with short breaks in between.
    

Whenever you are ready, press (H, U, I, or L) to start.`
    ;
    } else {
        if ((1 < session)) {
            instr_rt_text = `Today, we first continue to practice the symbol-key maps for ${rt_block} blocks.
    
Remember, your job is to press the corresponding key as quickly and accurately as you can.
    
Whenever you are ready, press (H, U, I, or L) to start.`
    ;
        }
    }
    instr_tr_old_pre_text = `Good job so far.
    
In the following ${tr_block_old} blocks, use the symbol-key map you learned. Press the corresponding key ON the fourth beep. 

Remember, the symbol may show up very late. In this case, MAKE A GUESS. This task is designed to be difficult, so it is okay to make a guess.
    

Press (H, U, I, or L) to start.`
    ;

    if (grp === 4) {
    instr_tr_old_post_text = `Great job.
    
In the following ${tr_block_old} blocks, use the symbol-key map you practices. Press the corresponding key ON the fourth beep. 

Only ${num_symb_grp} symbols will be used in these blocks.

Remember, the symbol may show up very late. In this case, MAKE A GUESS. This task is designed to be difficult, so it is okay to make a guess.
    

Press (H, U, I, or L) to start.`
    ;
    } else if (grp === 8) {
      instr_tr_old_post_text = `Great job.
    
In the following ${tr_block_old} blocks, use the symbol-key map you practices. Press the corresponding key ON the fourth beep. 

Remember, the symbol may show up very late. In this case, MAKE A GUESS. This task is designed to be difficult, so it is okay to make a guess.
    

Press (H, U, I, or L) to start.`
    ;
    }

    if ((grp_stop === 1)) {
        instr_cr_new_text = `Great job.
    
In next block, you will see the same eight symbols, but this time some of them may no longer correspond with a key (H, U, I, L).
        
Your job is to figure out which are those symbols and DO NOT PRESS ANY KEY when they appear. Instead, simply wait for 2 seconds.
        
        
ACCURACY is the priority, so go as slowly as you need to. The more mistaks you make, the longer this block will take.
        
        
Press (H, U, I, or L) to start.`
    ;
    } else {
        if ((grp_swap === 1)) {
            instr_cr_new_text = `Great job.
    
In the next block, you will see the same ${num_symb_grp} symbols, but this time they may correspond with a different key (H, U, I, L).

Your job is to figure out the new association between the symbols and the keys.


ACCURACY is the priority, so go as slowly as you need to. The more mistakes you make, the longer this block will take.


Press (H, U, I, or L) to start.`
    ;
        }
    }
    if ((grp_swap === 1)) {
        instr_tr_new_text = `Great job. We are almost there!

In the last ${tr_block_new_swap} blocks, use the NEW symbol-key map you just learned: 
Press the corresponding key ON the fourth beep. 
            
Remember, the symbol may show up very late. In this case, MAKE A GUESS. This task is designed to be difficult, so it is okay to make a guess.

            
        
Press (H, U, I, or L) to start.`
    ;
    } else {
        if ((grp_stop === 1)) {
            instr_tr_new_text = `Great job. We are almost there!
            
In the last ${tr_block_new_stop} blocks, use the NEW symbol-key map you just learned:
If you see a symbol that requires a response, press the corresponding key ON the fourth beep.             
If you see a symbol that does NOT require a response, DO NOT PRESS ANYTHING.


Remember, the symbol may show up very late. In this case, MAKE A GUESS. If you decide to press, remember to respond ON the fourth beep.

This task is designed to be difficult, so it is okay to make a guess.





Press (H, U, I, or L) to start.`
    ;
        }
    }
    penalty_toolate_text = `Response was too late.
2 second penalty.
After 2 second, press (H, U, I, or L) to continue.`
    ;
    penalty_tooearly_text = `Response was too early.
2 second penalty.
After 2 second, press (H, U, I, or L) to continue.`
    ;
    feedback_early_text = `little early`;
    feedback_late_text = `little late`;
    feedback_good_text = `good timing`;
    
    instr_sound_quit_text = `It seems that your computer does not play the sound well. 
    
Please press (Esc) to exit and check your spearker or headphone. 

Disconnect any Bluetooth headphone as it is NOT allowed.

You may restart the task later.`
    ;
    instr_sound_exit_text = `It seems that those sounds were not well identified. 
    
If you did not hear any sound, please press (Esc) to exit, check you audio, and restart the task later.

If you did hear sound but just pressed wrong buttons, press (spce bar) to proceed.`;

    instr_sound_select_text = ` Press ( f ) if you heared a coin sound; 

Press ( j ) if you heared a buzzer sound; `
    ;

    instr_sound_check_text = `We will first test your audio. Press the corresponding keys to hear different tones.

Press ( f ) to hear the coin sound.

Press ( j ) to hear the buzzer sound.

If you do not hear sound, press (Esc) to exist and check if you audio works fine on your computer.

If you are able to hear the sound, press (space bar) to proceed.`
  ;

  instr_sound_check_text2 = `On next screen, you will hear either the coin sound or the buzzer sound. 
  
Press ( f ) after hearing the coin sound. 

Press ( j ) after hearing the buzzer sound. 

You must get at least 4 of these correct in a row to proceed.

Whenever you are ready, press (space bar) to start.`
  ;
    instr_sound_check_feedback_P_text = `Your choice is correct`;
    instr_sound_check_feedback_N_text = `Your choice is not correct`;
    instr_sound_check_feedback_NO_text = `Let's hear it again`;
    // the Routine "Init_Stim" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var _Instr_Exp_Key_allKeys;
var Instr_ExpComponents;
function Instr_ExpRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_Exp'-------
    t = 0;
    Instr_ExpClock.reset(); // clock
    frameN = -1;

    TR_Beep = new sound.Sound({
      win: psychoJS.window,
      value: beep,
      secs: (- 1),
      startTime: 0,
    });
    TR_Beep.setVolume(1);

    TR_Coin_Hand = new sound.Sound({
      win: psychoJS.window,
      value: coin,
      secs: -1,
    });

    TR_Coin = new sound.Sound({
      win: psychoJS.window,
      value: coin,
      secs: -1,
    });

    TR_Feedback_Coin = new sound.Sound({
      win: psychoJS.window,
      value: coin,
      secs: -1,
      });
    // update component parameters for each repeat
    Instr_Exp_Text.setText(instr_exp_text);
    Instr_Exp_Key.keys = undefined;
    Instr_Exp_Key.rt = undefined;
    _Instr_Exp_Key_allKeys = [];
    // keep track of which components have finished
    Instr_ExpComponents = [];
    Instr_ExpComponents.push(Instr_Exp_Text);
    Instr_ExpComponents.push(Instr_Exp_Key);
    
    for (const thisComponent of Instr_ExpComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_ExpRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_Exp'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_ExpClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_Exp_Text* updates
    if (t >= 0.0 && Instr_Exp_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Exp_Text.tStart = t;  // (not accounting for frame time here)
      Instr_Exp_Text.frameNStart = frameN;  // exact frame index
      
      Instr_Exp_Text.setAutoDraw(true);
    }

    
    // *Instr_Exp_Key* updates
    if (t >= 0.0 && Instr_Exp_Key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Exp_Key.tStart = t;  // (not accounting for frame time here)
      Instr_Exp_Key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_Exp_Key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_Exp_Key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_Exp_Key.clearEvents(); });
    }

    if (Instr_Exp_Key.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_Exp_Key.getKeys({keyList: ['space'], waitRelease: false});
      _Instr_Exp_Key_allKeys = _Instr_Exp_Key_allKeys.concat(theseKeys);
      if (_Instr_Exp_Key_allKeys.length > 0) {
        Instr_Exp_Key.keys = _Instr_Exp_Key_allKeys[0].name;  // just the first key pressed
        Instr_Exp_Key.rt = _Instr_Exp_Key_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_ExpComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_ExpRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_Exp'-------
    for (const thisComponent of Instr_ExpComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_Exp_Key.keys', Instr_Exp_Key.keys);
    if (typeof Instr_Exp_Key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_Exp_Key.rt', Instr_Exp_Key.rt);
        routineTimer.reset();
        }
    
    Instr_Exp_Key.stop();
    // the Routine "Instr_Exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var _Instr_Sound_Check_Press_allKeys;
var trial_count;
var sound_criterion;
var sound_corr;
var sound_miss;
var x_sound;
var doplay;
var playdelay;
var sound_score;
var coin_yes;
var buzz_yes;
var key_num;
var _Instr_Sound_Check_Press_Space_allKeys;
var Instr_Sound_CheckComponents;
var temp_t;
function Instr_Sound_CheckRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_Sound_Check'-------
    t = 0;
    Instr_Sound_CheckClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_Sound_Check_Text.setText(instr_sound_check_text);
    Instr_Sound_Check_Press.keys = undefined;
    Instr_Sound_Check_Press.rt = undefined;
    _Instr_Sound_Check_Press_allKeys = [];
    trial_count = 0;
    sound_criterion = 4;
    sound_corr = 0;
    sound_miss = 0;
    x_sound = [1, 2, 1, 2, 1, 2, 1, 1, 2, 1];
    doplay = 0;
    playdelay = 0.5;
    sound_score = 0;
    coin_yes = 0;
    buzz_yes = 0;
    key_num = 0;
    

    sound_check_coin = new sound.Sound({
      win: psychoJS.window,
      value: coin,
      secs: -1,
      });
      
    sound_check_buzz = new sound.Sound({
    win: psychoJS.window,
    value: buzz,
    secs: -1,
    });
        
    sound_check_coin.setVolume(1);
    sound_check_buzz.setVolume(1);

    Instr_Sound_Check_Press_Space.keys = undefined;
    Instr_Sound_Check_Press_Space.rt = undefined;
    _Instr_Sound_Check_Press_Space_allKeys = [];
    // keep track of which components have finished
    Instr_Sound_CheckComponents = [];
    Instr_Sound_CheckComponents.push(Instr_Sound_Check_Text);
    Instr_Sound_CheckComponents.push(Instr_Sound_Check_Press);
    //Instr_Sound_CheckComponents.push(Coin_Tone_Text);
    //Instr_Sound_CheckComponents.push(Buzz_Tone_Text);
    Instr_Sound_CheckComponents.push(sound_check_coin);
    Instr_Sound_CheckComponents.push(sound_check_buzz);
    Instr_Sound_CheckComponents.push(Instr_Sound_Check_Press_Space);
    
    for (const thisComponent of Instr_Sound_CheckComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var playtime;
function Instr_Sound_CheckRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_Sound_Check'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_Sound_CheckClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_Sound_Check_Text* updates
    if (t >= 0.0 && Instr_Sound_Check_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Sound_Check_Text.tStart = t;  // (not accounting for frame time here)
      Instr_Sound_Check_Text.frameNStart = frameN;  // exact frame index
      
      Instr_Sound_Check_Text.setAutoDraw(true);
    }

    // *Instr_Sound_Check_Press* updates
    if (t >= 0.0 && Instr_Sound_Check_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Sound_Check_Press.tStart = t;  // (not accounting for frame time here)
      Instr_Sound_Check_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_Sound_Check_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_Sound_Check_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_Sound_Check_Press.clearEvents(); });
    }

    if (Instr_Sound_Check_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_Sound_Check_Press.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _Instr_Sound_Check_Press_allKeys = _Instr_Sound_Check_Press_allKeys.concat(theseKeys);
      if (_Instr_Sound_Check_Press_allKeys.length > 0) {
        Instr_Sound_Check_Press.keys = _Instr_Sound_Check_Press_allKeys[0].name;  // just the last key pressed
        Instr_Sound_Check_Press.rt = _Instr_Sound_Check_Press_allKeys[0].rt;
      }
    }
    
    // *Coin_Tone_Text* updates
    /* if (t >= 0.0 && Coin_Tone_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Coin_Tone_Text.tStart = t;  // (not accounting for frame time here)
      Coin_Tone_Text.frameNStart = frameN;  // exact frame index
      
      Coin_Tone_Text.setAutoDraw(true);
    } */

    
    // *Buzz_Tone_Text* updates
    /* if (t >= 0.0 && Buzz_Tone_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Buzz_Tone_Text.tStart = t;  // (not accounting for frame time here)
      Buzz_Tone_Text.frameNStart = frameN;  // exact frame index
      
      Buzz_Tone_Text.setAutoDraw(true);
    } */

    
    // start/stop sound_check_coin
    if (Instr_Sound_Check_Press.keys === "f" && sound_check_coin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_check_coin.tStart = t;  // (not accounting for frame time here)
      sound_check_coin.frameNStart = frameN;  // exact frame index
      temp_t = sound_check_coin.tStart


      psychoJS.window.callOnFlip(function(){ sound_check_coin.play(); });  // screen flip
      sound_check_coin.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_check_coin.getDuration() + sound_check_coin.tStart)     && sound_check_coin.status === PsychoJS.Status.STARTED) {
      sound_check_coin.stop();  // stop the sound (if longer than duration)
      sound_check_coin.status = PsychoJS.Status.FINISHED;
    }
    // start/stop sound_check_buzz
    if (Instr_Sound_Check_Press.keys === "j" && sound_check_buzz.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_check_buzz.tStart = t;  // (not accounting for frame time here)
      sound_check_buzz.frameNStart = frameN;  // exact frame index
      temp_t = sound_check_buzz.tStart


      psychoJS.window.callOnFlip(function(){ sound_check_buzz.play(); });  // screen flip
      sound_check_buzz.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_check_buzz.getDuration() + sound_check_buzz.tStart) && sound_check_buzz.status === PsychoJS.Status.STARTED) {
      sound_check_buzz.stop();  // stop the sound (if longer than duration)
      sound_check_buzz.status = PsychoJS.Status.FINISHED;
    }
    
    // *Instr_Sound_Check_Press_Space* updates
    if (t >= 0.0 && Instr_Sound_Check_Press_Space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Sound_Check_Press_Space.tStart = t;  // (not accounting for frame time here)
      Instr_Sound_Check_Press_Space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_Sound_Check_Press_Space.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_Sound_Check_Press_Space.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_Sound_Check_Press_Space.clearEvents(); });
    }

    if (Instr_Sound_Check_Press_Space.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_Sound_Check_Press_Space.getKeys({keyList: ['space'], waitRelease: false});
      _Instr_Sound_Check_Press_Space_allKeys = _Instr_Sound_Check_Press_Space_allKeys.concat(theseKeys);
      if (_Instr_Sound_Check_Press_Space_allKeys.length > 0) {
        Instr_Sound_Check_Press_Space.keys = _Instr_Sound_Check_Press_Space_allKeys[0].name;  // just the first key pressed
        Instr_Sound_Check_Press_Space.rt = _Instr_Sound_Check_Press_Space_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    if (sound_check_coin.status === PsychoJS.Status.FINISHED || sound_check_buzz.status === PsychoJS.Status.FINISHED) {
      // keep track of start time/frame for later
      //Coin_Tone_Text.setAutoDraw(false);
      //Buzz_Tone_Text.setAutoDraw(false);
      continueRoutine = false;
    }


    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_Sound_CheckComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_Sound_CheckRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_Sound_Check'-------
    for (const thisComponent of Instr_Sound_CheckComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }

    psychoJS.experiment.addData('Instr_Sound_Check_Press.keys', Instr_Sound_Check_Press.keys);
    if (typeof Instr_Sound_Check_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_Sound_Check_Press.rt', Instr_Sound_Check_Press.rt);
        }
    
    Instr_Sound_Check_Press.stop();
    if ((Instr_Sound_Check_Press_Space.keys === "space")) {
        trials.finished = true;
    }
    
    //sound_check_coin.stop();  // ensure sound has stopped at end of routine
    //sound_check_buzz.stop();  // ensure sound has stopped at end of routine
    psychoJS.experiment.addData('Instr_Sound_Check_Press_Space.keys', Instr_Sound_Check_Press_Space.keys);
    if (typeof Instr_Sound_Check_Press_Space.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_Sound_Check_Press_Space.rt', Instr_Sound_Check_Press_Space.rt);
        routineTimer.reset();
        }
    
    Instr_Sound_Check_Press_Space.stop();
    // the Routine "Instr_Sound_Check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var sound_check_trial_count;
var sound_criterion;
var sound_corr;
var sound_miss;
var Sound_Check_Creat_StimSeqComponents;
var _Sound_check_Creat_StimSeq_Text_Press_allKeys;
function Sound_Check_Creat_StimSeqRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Creat_StimSeq'-------
    t = 0;
    Sound_Check_Creat_StimSeqClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    sound_check_trial_count = 1;
    sound_criterion = 4;
    sound_corr = 0;
    sound_miss = 0;


    Sound_check_Creat_StimSeq_Text.setText(instr_sound_check_text2);
    Sound_check_Creat_StimSeq_Text_Press.keys = undefined;
    Sound_check_Creat_StimSeq_Text_Press.rt = undefined;
    _Sound_check_Creat_StimSeq_Text_Press_allKeys = [];
    
    // keep track of which components have finished
    Sound_Check_Creat_StimSeqComponents = [];
    Sound_Check_Creat_StimSeqComponents.push(Sound_check_Creat_StimSeq_Text);
    Sound_Check_Creat_StimSeqComponents.push(Sound_check_Creat_StimSeq_Text_Press);
    
    
    for (const thisComponent of Sound_Check_Creat_StimSeqComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Sound_Check_Creat_StimSeqRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Creat_StimSeq'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Sound_Check_Creat_StimSeqClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)


    // *Instr_Trial_Num_Text* updates
    if (t >= 0.0 && Sound_check_Creat_StimSeq_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sound_check_Creat_StimSeq_Text.tStart = t;  // (not accounting for frame time here)
      Sound_check_Creat_StimSeq_Text.frameNStart = frameN;  // exact frame index
      
      Sound_check_Creat_StimSeq_Text.setAutoDraw(true);
    }

    // *Instr_Trial_Num_Press* updates
    if (t >= 0.0 && Sound_check_Creat_StimSeq_Text_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sound_check_Creat_StimSeq_Text_Press.tStart = t;  // (not accounting for frame time here)
      Sound_check_Creat_StimSeq_Text_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Sound_check_Creat_StimSeq_Text_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Sound_check_Creat_StimSeq_Text_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Sound_check_Creat_StimSeq_Text_Press.clearEvents(); });
    }

    if (Sound_check_Creat_StimSeq_Text_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Sound_check_Creat_StimSeq_Text_Press.getKeys({keyList: ['space'], waitRelease: false});
      _Sound_check_Creat_StimSeq_Text_Press_allKeys = _Sound_check_Creat_StimSeq_Text_Press_allKeys.concat(theseKeys);
      if (_Sound_check_Creat_StimSeq_Text_Press_allKeys.length > 0) {
        Sound_check_Creat_StimSeq_Text_Press.keys = _Sound_check_Creat_StimSeq_Text_Press_allKeys[0].name;  // just the first key pressed
        Sound_check_Creat_StimSeq_Text_Press.rt = _Sound_check_Creat_StimSeq_Text_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Sound_Check_Creat_StimSeqComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Sound_Check_Creat_StimSeqRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Creat_StimSeq'-------
    for (const thisComponent of Sound_Check_Creat_StimSeqComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    
    psychoJS.experiment.addData('Sound_check_Creat_StimSeq_Text_Press.keys', Sound_check_Creat_StimSeq_Text_Press.keys);
    if (typeof Instr_Trial_Num_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Sound_check_Creat_StimSeq_Text_Press.rt', Sound_check_Creat_StimSeq_Text_Press.rt);
        routineTimer.reset();
        }
    
    Instr_Trial_Num_Press.stop();
    // the Routine "Creat_StimSeq" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var beep_sound_check;
var sound_name;
var no_sound;
var sound_check_corr;
var Sound_Check_Pre_TrialComponents;
var score;
function Sound_Check_Pre_TrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Pre_Trial'-------
    t = 0;
    Sound_Check_Pre_TrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    
    if ((Math.random() < 0.5)) {
        beep_sound_check = coin;
        sound_name = "coin";
    } else {
        beep_sound_check = buzz;
        sound_name = "buzz";
    }
    no_sound = 0;
    corr = (- 1);
    
    Sound_Check_Sound_Play = new sound.Sound({
    win: psychoJS.window,
    value: beep_sound_check,
    secs: -1,
    });

    Sound_Check_Sound_Play.setVolume(1);


    pre_trial_dur = 0.2;
    
    Sound_Score.setText(sound_score);
    Sound_Score_Text.setText('Score')
    Sound_Score_Hint.setText(instr_sound_select_text)
    
    // keep track of which components have finished
    Sound_Check_Pre_TrialComponents = [];
    Sound_Check_Pre_TrialComponents.push(Sound_Score);
    Sound_Check_Pre_TrialComponents.push(Sound_Score_Text);
    Sound_Check_Pre_TrialComponents.push(Sound_Score_Hint);

    for (const thisComponent of Sound_Check_Pre_TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Sound_Check_Pre_TrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Pre_Trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Sound_Check_Pre_TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame


    // *Pre_Trial_Rec_Frame* updates
    if (t >= 0.0 && Sound_Score.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sound_Score.tStart = t;  // (not accounting for frame time here)
      Sound_Score.frameNStart = frameN;  // exact frame index
      
      Sound_Score.setAutoDraw(true);
    }

    // *Pre_Trial_Rec_Frame* updates
    if (t >= 0.0 && Sound_Score_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sound_Score_Text.tStart = t;  // (not accounting for frame time here)
      Sound_Score_Text.frameNStart = frameN;  // exact frame index
      
      Sound_Score_Text.setAutoDraw(true);
    }

    // *Pre_Trial_Rec_Frame* updates
    if (t >= 0.0 && Sound_Score_Hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sound_Score_Hint.tStart = t;  // (not accounting for frame time here)
      Sound_Score_Hint.frameNStart = frameN;  // exact frame index
      
      Sound_Score_Hint.setAutoDraw(true);
    }

    frameRemains = 0.0 + pre_trial_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Sound_Score_Text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Sound_Score.setAutoDraw(false);
      Sound_Score_Text.setAutoDraw(false);
      Sound_Score_Hint.setAutoDraw(false);
    }


    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Sound_Check_Pre_TrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Sound_Check_Pre_TrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Pre_Trial'-------
    for (const thisComponent of Sound_Check_Pre_TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData("sound_check", sound_name);
    
    // the Routine "Pre_Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Sound_Check_Press_allKeys;
var Sound_Check_Enter_TrialComponents;
function Sound_Check_Enter_TrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RT_Enter_Trial'-------
    t = 0;
    Sound_Check_Enter_TrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Sound_Check_Press.keys = undefined;
    Sound_Check_Press.rt = undefined;
    _Sound_Check_Press_allKeys = [];
    
    
    Sound_Score.setText(sound_score);
    Sound_Score_Text.setText('Score')
    Sound_Score_Hint.setText(instr_sound_select_text)

    Sound_Check_Play_Text.setText(instr_sound_select_text);
    // keep track of which components have finished
    Sound_Check_Enter_TrialComponents = [];
    Sound_Check_Enter_TrialComponents.push(Sound_Check_Press);
    Sound_Check_Enter_TrialComponents.push(Sound_Check_Sound_Play);
    Sound_Check_Enter_TrialComponents.push(Sound_Check_Play_Text);
    
    for (const thisComponent of Sound_Check_Enter_TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Sound_Check_Enter_TrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RT_Enter_Trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Sound_Check_Enter_TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    

    if (t >= 0.0) {
      Sound_Score.setText(sound_score);
      Sound_Score.setAutoDraw(true);
      Sound_Score_Text.setAutoDraw(true);
      Sound_Score_Hint.setAutoDraw(true);
    }

    // *Sound_Check_Press* updates
    if (t >= (Sound_Check_Sound_Play.getDuration() + Sound_Check_Sound_Play.tStart) && Sound_Check_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sound_Check_Press.tStart = t;  // (not accounting for frame time here)
      Sound_Check_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Sound_Check_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Sound_Check_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Sound_Check_Press.clearEvents(); });
    }

    if (Sound_Check_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Sound_Check_Press.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _Sound_Check_Press_allKeys = _Sound_Check_Press_allKeys.concat(theseKeys);
      if (_Sound_Check_Press_allKeys.length > 0) {
        Sound_Check_Press.keys = _Sound_Check_Press_allKeys[0].name;  // just the first key pressed
        Sound_Check_Press.rt = _Sound_Check_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop Sound_Check_Sound_Play
    if (t >= 1 && Sound_Check_Sound_Play.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sound_Check_Sound_Play.tStart = t;  // (not accounting for frame time here)
      Sound_Check_Sound_Play.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ Sound_Check_Sound_Play.play(); });  // screen flip
      Sound_Check_Sound_Play.status = PsychoJS.Status.STARTED;
    }
    if (t >= (Sound_Check_Sound_Play.getDuration() + Sound_Check_Sound_Play.tStart)     && Sound_Check_Sound_Play.status === PsychoJS.Status.STARTED) {
      Sound_Check_Sound_Play.stop();  // stop the sound (if longer than duration)
      Sound_Check_Sound_Play.status = PsychoJS.Status.FINISHED;
    }
    
    /* // *Sound_Check_Play_Text* updates
    if (t >= 2 && Sound_Check_Play_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sound_Check_Play_Text.tStart = t;  // (not accounting for frame time here)
      Sound_Check_Play_Text.frameNStart = frameN;  // exact frame index
      
      Sound_Check_Play_Text.setAutoDraw(true);
    } */

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Sound_Check_Enter_TrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var sound_check_feedback_text;
var Sound_key_press;
var sound_check_rt;
function Sound_Check_Enter_TrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RT_Enter_Trial'-------
    for (const thisComponent of Sound_Check_Enter_TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }

    Sound_Score.setAutoDraw(false);
    Sound_Score_Hint.setAutoDraw(false);
    Sound_Score_Text.setAutoDraw(false);

    if ((beep_sound_check === coin)) {
        if ((Sound_Check_Press.keys === "f")) {
            
            sound_check_corr = 1;
            no_sound = 0;
        } else {
            if ((Sound_Check_Press.keys === "j")) {
                sound_check_corr = 0;
                no_sound = 0;
            } else {
                if ((Sound_Check_Press.keys === "n")) {
                    no_sound = 1;
                    sound_check_corr = 0;
                }
            }
        }
    } else {
        if ((Sound_Check_Press.keys === "f")) {
            sound_check_corr = 0;
            no_sound = 0;
        } else {
            if ((Sound_Check_Press.keys === "j")) {
                sound_check_corr = 1;
                no_sound = 0;
            } else {
                if ((Sound_Check_Press.keys === "n")) {
                    no_sound = 1;
                    sound_check_corr = 0;
                }
            }
        }
    }
    if ((sound_check_corr === 1)) {
        sound_check_feedback_text = instr_sound_check_feedback_P_text;
    } else {
        if (((sound_check_corr === 0) && (no_sound === 0))) {
            sound_check_feedback_text = instr_sound_check_feedback_N_text;
        } else {
            if ((no_sound === 1)) {
                sound_check_feedback_text = instr_sound_check_feedback_NO_text;
            }
        }
    }


    // update component parameters for each repeat
    if ((sound_check_corr === 1)) {
      sound_corr = (sound_corr + 1);
      sound_score = sound_score + 1;
    } else {
        if (((sound_check_corr === 0) && (sound_corr < sound_criterion))) {
            sound_corr = 0;
            sound_score = 0;
        }
    }
    if ((no_sound === 1)) {
        sound_miss = (sound_miss + 1);
    } else {
        if (((no_sound === 0) && (sound_miss < sound_criterion))) {
            sound_miss = 0;
        }
    }
    sound_check_trial_count = (sound_check_trial_count + 1);
    if ((sound_check_trial_count > num_trials_sound_check)) {
        sound_exit_bool = 1;
    }
    if ((sound_miss === sound_criterion)) {
        sound_quit_bool = 0;
    }
    
    if (((sound_corr === sound_criterion) || (sound_miss === sound_criterion))) {
      trials.finished = true;
      sound_exit_bool = 0;
    }

    Sound_key_press = Sound_Check_Press.keys;
    sound_check_rt = Sound_Check_Press.rt - 1; // sound play 1s after trial onset
    psychoJS.experiment.addData("sound_check_press", Sound_key_press);
    psychoJS.experiment.addData("sound_check_rt", sound_check_rt);
    psychoJS.experiment.addData("sound_check_correct", corr);
    psychoJS.experiment.addData("sound_check_trial_count", sound_check_trial_count)

    psychoJS.experiment.addData('Sound_Check_Press.keys', Sound_Check_Press.keys);
    if (typeof Sound_Check_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Sound_Check_Press.rt', Sound_Check_Press.rt);
        routineTimer.reset();
        }
    
    Sound_Check_Press.stop();
    Sound_Check_Sound_Play.stop();  // ensure sound has stopped at end of routine
    // the Routine "RT_Enter_Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Sound_Check_FeedbackComponents;
function Sound_Check_FeedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RT_Feedback'-------
    t = 0;
    Sound_Check_FeedbackClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    Sound_Check_Feedback_Text.setText(sound_check_feedback_text);
    // keep track of which components have finished
    Sound_Check_FeedbackComponents = [];
    Sound_Check_FeedbackComponents.push(Sound_Check_Feedback_Text);
    
    for (const thisComponent of Sound_Check_FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function Sound_Check_FeedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RT_Feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Sound_Check_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Sound_Check_Feedback_Text* updates
    if (t >= 0.0 && Sound_Check_Feedback_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sound_Check_Feedback_Text.tStart = t;  // (not accounting for frame time here)
      Sound_Check_Feedback_Text.frameNStart = frameN;  // exact frame index
      
      Sound_Check_Feedback_Text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Sound_Check_Feedback_Text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Sound_Check_Feedback_Text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Sound_Check_FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Sound_Check_FeedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RT_Feedback'-------
    for (const thisComponent of Sound_Check_FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var Sound_Check_Criterion_DetComponents;
function Sound_Check_Criterion_DetRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Criterion_Det'-------
    t = 0;
    Sound_Check_Criterion_DetClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((sound_check_corr === 1)) {
        sound_corr = (sound_corr + 1);
    } else {
        if (((sound_check_corr === 0) && (sound_corr < sound_criterion))) {
            sound_corr = 0;
        }
    }
    if ((no_sound === 1)) {
        sound_miss = (sound_miss + 1);
    } else {
        if (((no_sound === 0) && (sound_miss < sound_criterion))) {
            sound_miss = 0;
        }
    }
    sound_check_trial_count = (sound_check_trial_count + 1);
    if ((sound_check_trial_count > num_trials_sound_check)) {
        sound_exit_bool = 1;
    }
    if ((sound_miss === sound_criterion)) {
        sound_quit_bool = 1;
    }
    
    if (((sound_corr === sound_criterion) || (sound_miss === sound_criterion))) {
      trials.finished = true;
    }
    
    // keep track of which components have finished
    Sound_Check_Criterion_DetComponents = [];
    
    for (const thisComponent of Sound_Check_Criterion_DetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Sound_Check_Criterion_DetRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Criterion_Det'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Sound_Check_Criterion_DetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Sound_Check_Criterion_DetComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Sound_Check_Criterion_DetRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Criterion_Det'-------
    for (const thisComponent of Sound_Check_Criterion_DetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Criterion_Det" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Sound_Quit_TextComponents;
function Sound_Quit_TextRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Sound_Quit_Text'-------
    t = 0;
    Sound_Quit_TextClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instr_Sound_Quit_Text.setText(instr_sound_quit_text);
    // keep track of which components have finished
    Sound_Quit_TextComponents = [];
    Sound_Quit_TextComponents.push(instr_Sound_Quit_Text);
    
    for (const thisComponent of Sound_Quit_TextComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Sound_Quit_TextRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Sound_Quit_Text'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Sound_Quit_TextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_Sound_Quit_Text* updates
    if (t >= 0.0 && instr_Sound_Quit_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_Sound_Quit_Text.tStart = t;  // (not accounting for frame time here)
      instr_Sound_Quit_Text.frameNStart = frameN;  // exact frame index
      
      instr_Sound_Quit_Text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Sound_Quit_TextComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Sound_Quit_TextRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Sound_Quit_Text'-------
    for (const thisComponent of Sound_Quit_TextComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Sound_Quit_Text" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Sound_Exit_TextComponents;
var _Sound_Exit_Text_Press_allKeys;
function Sound_Exit_TextRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Sound_Exit_Text'-------
    t = 0;
    Sound_Exit_TextClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    inst_Sound_Exit_Text.setText(instr_sound_exit_text);

    Sound_Exit_Text_Press.keys = undefined;
    Sound_Exit_Text_Press.rt = undefined;
    _Sound_Exit_Text_Press_allKeys = [];
    // keep track of which components have finished
    Sound_Exit_TextComponents = [];
    Sound_Exit_TextComponents.push(inst_Sound_Exit_Text);
    Sound_Exit_TextComponents.push(Sound_Exit_Text_Press);


    for (const thisComponent of Sound_Exit_TextComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Sound_Exit_TextRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Sound_Exit_Text'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Sound_Exit_TextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_Sound_Exit_Text* updates
    if (t >= 0.0 && inst_Sound_Exit_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_Sound_Exit_Text.tStart = t;  // (not accounting for frame time here)
      inst_Sound_Exit_Text.frameNStart = frameN;  // exact frame index
      
      inst_Sound_Exit_Text.setAutoDraw(true);
    }


    // *Instr_Sound_Check_Press_Space* updates
    if (t >= 0.0 && Sound_Exit_Text_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sound_Exit_Text_Press.tStart = t;  // (not accounting for frame time here)
      Sound_Exit_Text_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Sound_Exit_Text_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Sound_Exit_Text_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Sound_Exit_Text_Press.clearEvents(); });
    }

    if (Sound_Exit_Text_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Sound_Exit_Text_Press.getKeys({keyList: ['space'], waitRelease: false});
      _Sound_Exit_Text_Press_allKeys = _Sound_Exit_Text_Press_allKeys.concat(theseKeys);
      if (_Sound_Exit_Text_Press_allKeys.length > 0) {
        Sound_Exit_Text_Press.keys = _Sound_Exit_Text_Press_allKeys[0].name;  // just the first key pressed
        Sound_Exit_Text_Press.rt = _Sound_Exit_Text_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Sound_Exit_TextComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Sound_Exit_TextRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Sound_Exit_Text'-------
    for (const thisComponent of Sound_Exit_TextComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }

    psychoJS.experiment.addData('Sound_Exit_Text_Press.keys', Sound_Exit_Text_Press.keys);
    if (typeof Sound_Exit_Text_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Sound_Exit_Text_Press.rt', Sound_Exit_Text_Press.rt);
        }
    
    Sound_Exit_Text_Press.stop();
    // the Routine "Sound_Exit_Text" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var stim_type;
var remap;
var block_count;
var _Instr_RT_Hand_Key_allKeys;
var Instr_RT_HandComponents;
function Instr_RT_HandRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_RT_Hand'-------
    t = 0;
    Instr_RT_HandClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    block_type = "RT";
    stim_type = "Hand";
    remap = 0;
    block_count = 0;
    
    Instr_RT_Hand_Rext.setText(instr_rt_text_hand);
    Instr_RT_Hand_Key.keys = undefined;
    Instr_RT_Hand_Key.rt = undefined;
    _Instr_RT_Hand_Key_allKeys = [];
    // keep track of which components have finished
    Instr_RT_HandComponents = [];
    Instr_RT_HandComponents.push(Instr_RT_Hand_Rext);
    Instr_RT_HandComponents.push(Instr_RT_Hand_Key);
    
    for (const thisComponent of Instr_RT_HandComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_RT_HandRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_RT_Hand'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_RT_HandClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_RT_Hand_Rext* updates
    if (t >= 0.0 && Instr_RT_Hand_Rext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_RT_Hand_Rext.tStart = t;  // (not accounting for frame time here)
      Instr_RT_Hand_Rext.frameNStart = frameN;  // exact frame index
      
      Instr_RT_Hand_Rext.setAutoDraw(true);
    }

    
    // *Instr_RT_Hand_Key* updates
    if (t >= 0.0 && Instr_RT_Hand_Key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_RT_Hand_Key.tStart = t;  // (not accounting for frame time here)
      Instr_RT_Hand_Key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_RT_Hand_Key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_RT_Hand_Key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_RT_Hand_Key.clearEvents(); });
    }

    if (Instr_RT_Hand_Key.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_RT_Hand_Key.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_RT_Hand_Key_allKeys = _Instr_RT_Hand_Key_allKeys.concat(theseKeys);
      if (_Instr_RT_Hand_Key_allKeys.length > 0) {
        Instr_RT_Hand_Key.keys = _Instr_RT_Hand_Key_allKeys[0].name;  // just the first key pressed
        Instr_RT_Hand_Key.rt = _Instr_RT_Hand_Key_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_RT_HandComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_RT_HandRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_RT_Hand'-------
    for (const thisComponent of Instr_RT_HandComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_RT_Hand_Key.keys', Instr_RT_Hand_Key.keys);
    if (typeof Instr_RT_Hand_Key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_RT_Hand_Key.rt', Instr_RT_Hand_Key.rt);
        routineTimer.reset();
        }
    
    Instr_RT_Hand_Key.stop();
    // the Routine "Instr_RT_Hand" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trial_count;
var repeat_count;
var trial_count_item;
var tr_timing_good;
var sum_corr;
var sum_corr_subset = [];
var seq_stimnum_hand;
var seq_stimnum;
var seq_keynum;
var seq_key;
var seq_symb;
var seq_symb_g;
var seq_symb_r;
var seq_handx;
var seq_handy;
var seq_key_hand;
var seq_keynum_hand;
var Creat_StimSeqComponents;
var x_new;
function Creat_StimSeqRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Creat_StimSeq'-------
    t = 0;
    Creat_StimSeqClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    trial_count = 0;
    repeat_count = 0;
    tr_timing_good = 0;
    
    sum_corr = [0, 0, 0, 0, 0, 0, 0, 0];
    trial_count_item = [0, 0, 0, 0, 0, 0, 0, 0];
    
    

    if ((stim_type === "Hand")) {
        seq_stimnum_hand = [];
        seq_handx = [];
        seq_handy = [];
        seq_key_hand = [];
        seq_keynum_hand = [];
    } else {
        seq_stimnum = [];
        seq_key = [];
        seq_symb = [];
        seq_symb_g = [];
        seq_symb_r = [];
        seq_keynum = [];
    }

    if ((stim_type === "Hand")) {
        count = 0;
        while ((count < (num_trials_hand / 8))) {
            util.shuffle(x_hand);
            for (var i, _pj_c = 0, _pj_a = x_hand, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                seq_handx.push(x[i]);
                seq_handy.push(y[i]);
                seq_key_hand.push(key[i]);
                seq_keynum_hand.push(keynum[i]);
                seq_stimnum_hand.push(stimnum[i]);
            }
            count = (count + 1);
        }
    }
    if (block_type === "CR" && remap === 0) {
        count = 0;
        while ((count < (num_trials_cr / 40))) {
            util.shuffle(x16);
            for (var i, _pj_c = 0, _pj_a = x16, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                seq_stimnum.push(stimnum[i]);
                seq_key.push(key[i]);
                seq_symb.push(symb[i]);
                //seq_symb_g.push(symb_g[i]);
                //seq_symb_r.push(symb_r[i]);
                seq_keynum.push(keynum[i]);
            }
            util.shuffle(x16);
            for (var i, _pj_c = 0, _pj_a = x16, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                seq_stimnum.push(stimnum[i]);
                seq_key.push(key[i]);
                seq_symb.push(symb[i]);
                //seq_symb_g.push(symb_g[i]);
                //seq_symb_r.push(symb_r[i]);
                seq_keynum.push(keynum[i]);
            }
            util.shuffle(x8_new);
            for (var i, _pj_c = 0, _pj_a = x8_new, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                seq_stimnum.push(stimnum[i]);
                seq_key.push(key[i]);
                seq_symb.push(symb[i]);
                //seq_symb_g.push(symb_g[i]);
                //seq_symb_r.push(symb_r[i]);
                seq_keynum.push(keynum[i]);
            }
            count = (count + 1);
        }
    }
    

    if ((block_type === "CR" && remap === 1))  {
      if (grp === 4) {
        x_new = subset.concat(subset)
        count = 0;
        while ((count < (num_trials_cr / 20))) {
            
            util.shuffle(x_new);
            for (var i, _pj_c = 0, _pj_a = x_new, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                seq_stimnum.push(stimnum[i]);
                seq_key.push(key[i]);
                seq_symb.push(symb[i]);
                //seq_symb_g.push(symb_g[i]);
                //seq_symb_r.push(symb_r[i]);
                seq_keynum.push(keynum[i]);
            }
            util.shuffle(x_new);
            for (var i, _pj_c = 0, _pj_a = x_new, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                seq_stimnum.push(stimnum[i]);
                seq_key.push(key[i]);
                seq_symb.push(symb[i]);
                //seq_symb_g.push(symb_g[i]);
                //seq_symb_r.push(symb_r[i]);
                seq_keynum.push(keynum[i]);
            }
            util.shuffle(subset);
            for (var i, _pj_c = 0, _pj_a = subset, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                seq_stimnum.push(stimnum[i]);
                seq_key.push(key[i]);
                seq_symb.push(symb[i]);
                //seq_symb_g.push(symb_g[i]);
                //seq_symb_r.push(symb_r[i]);
                seq_keynum.push(keynum[i]);
            }
            count = (count + 1);
        }
      } else if (grp === 8) {
        count = 0;
        while ((count < (num_trials_cr / 40))) {
            util.shuffle(x16);
            for (var i, _pj_c = 0, _pj_a = x16, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                seq_stimnum.push(stimnum[i]);
                seq_key.push(key[i]);
                seq_symb.push(symb[i]);
                //seq_symb_g.push(symb_g[i]);
                //seq_symb_r.push(symb_r[i]);
                seq_keynum.push(keynum[i]);
            }
            util.shuffle(x16);
            for (var i, _pj_c = 0, _pj_a = x16, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                seq_stimnum.push(stimnum[i]);
                seq_key.push(key[i]);
                seq_symb.push(symb[i]);
                //seq_symb_g.push(symb_g[i]);
                //seq_symb_r.push(symb_r[i]);
                seq_keynum.push(keynum[i]);
            }
            util.shuffle(subset);
            for (var i, _pj_c = 0, _pj_a = subset, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                seq_stimnum.push(stimnum[i]);
                seq_key.push(key[i]);
                seq_symb.push(symb[i]);
                //seq_symb_g.push(symb_g[i]);
                //seq_symb_r.push(symb_r[i]);
                seq_keynum.push(keynum[i]);
            }
            count = (count + 1);
        }
      }
    }

  if (block_type === "RT" && stim_type === "Symb") {
      count = 0;
      while ((count < (num_trials / 16))) {
          util.shuffle(x16);
          for (var i, _pj_c = 0, _pj_a = x16, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
              i = _pj_a[_pj_c];
              seq_stimnum.push(stimnum[i]);
              seq_key.push(key[i]);
              seq_symb.push(symb[i]);
              //seq_symb_g.push(symb_g[i]);
              //seq_symb_r.push(symb_r[i]);
              seq_keynum.push(keynum[i]);
          }
          count = (count + 1);
      }
  }

  if (block_type === "TR" && stim_type === "Symb") {
      if (grp === 4) {
        x_new = subset.concat(subset)
        count = 0;
        while ((count < (num_trials / 8))) {
          
          util.shuffle(x_new);
          for (var i, _pj_c = 0, _pj_a = x_new, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
              i = _pj_a[_pj_c];
              seq_stimnum.push(stimnum[i]);
              seq_key.push(key[i]);
              seq_symb.push(symb[i]);
              //seq_symb_g.push(symb_g[i]);
              //seq_symb_r.push(symb_r[i]);
              seq_keynum.push(keynum[i]);
          }
          count = (count + 1);
        }
      } else if (grp === 8) {
        count = 0;
        while ((count < (num_trials / 16))) {
          util.shuffle(x16);
          for (var i, _pj_c = 0, _pj_a = x16, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
              i = _pj_a[_pj_c];
              seq_stimnum.push(stimnum[i]);
              seq_key.push(key[i]);
              seq_symb.push(symb[i]);
              //seq_symb_g.push(symb_g[i]);
              //seq_symb_r.push(symb_r[i]);
              seq_keynum.push(keynum[i]);
          }
          count = (count + 1);
        }
      } 
  }
    
    // keep track of which components have finished
    Creat_StimSeqComponents = [];
    
    for (const thisComponent of Creat_StimSeqComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Creat_StimSeqRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Creat_StimSeq'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Creat_StimSeqClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Creat_StimSeqComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Creat_StimSeqRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Creat_StimSeq'-------
    for (const thisComponent of Creat_StimSeqComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    block_count = (block_count + 1);
    
    // the Routine "Creat_StimSeq" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var x_item;
var key_item;
var y_item;
var keynum_item;
var stimnum_item;
var position_item;
var stim_start_time;
var prep_time;
var Pre_Trial_HandComponents;
function Pre_Trial_HandRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Pre_Trial_Hand'-------
    t = 0;
    Pre_Trial_HandClock.reset(); // clock
    frameN = -1;

    // update component parameters for each repeat
    Pre_Trial_Rec_Frame_Hand.setOpacity(rec_frame_opacity);
    Pre_Trial_Rec_Frame_Hand.setLineColor(new util.Color(rec_frame_color));
    Pre_Trial_Rec_Frame_Hand.setLineWidth(rec_wd);
    Pre_Trial_HandShape.setImage(hand_shape);
    x_item = seq_handx[trial_count];
    key_item = seq_key_hand[trial_count];
    y_item = seq_handy[trial_count];
    keynum_item = seq_keynum_hand[trial_count];
    stimnum_item = seq_stimnum_hand[trial_count];
    position_item = [x_item, y_item];
    if ((block_type === "TR")) {
        stim_start_time = (((Math.random() * prep_time_range[1]) + prep_time_range[0]) + beep_lead_in);
        prep_time = ((time_limit - too_late_tol) - stim_start_time);
    } else {
        stim_start_time = 99;
        prep_time = 99;
    }
    
    // keep track of which components have finished
    Pre_Trial_HandComponents = [];
    Pre_Trial_HandComponents.push(Pre_Trial_Rec_Frame_Hand);
    Pre_Trial_HandComponents.push(Pre_Trial_HandShape);
    
    for (const thisComponent of Pre_Trial_HandComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function Pre_Trial_HandRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Pre_Trial_Hand'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Pre_Trial_HandClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Pre_Trial_Rec_Frame_Hand* updates
    if (t >= 0.0 && Pre_Trial_Rec_Frame_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pre_Trial_Rec_Frame_Hand.tStart = t;  // (not accounting for frame time here)
      Pre_Trial_Rec_Frame_Hand.frameNStart = frameN;  // exact frame index
      
      Pre_Trial_Rec_Frame_Hand.setAutoDraw(true);
    }

    frameRemains = 0.0 + pre_trial_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pre_Trial_Rec_Frame_Hand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pre_Trial_Rec_Frame_Hand.setAutoDraw(false);
    }
    
    // *Pre_Trial_HandShape* updates
    if (t >= 0.0 && Pre_Trial_HandShape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pre_Trial_HandShape.tStart = t;  // (not accounting for frame time here)
      Pre_Trial_HandShape.frameNStart = frameN;  // exact frame index
      
      Pre_Trial_HandShape.setAutoDraw(true);
    }

    frameRemains = 0.0 + pre_trial_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pre_Trial_HandShape.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pre_Trial_HandShape.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Pre_Trial_HandComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pre_Trial_HandRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Pre_Trial_Hand'-------
    for (const thisComponent of Pre_Trial_HandComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((stim_type === "Hand")) {
        psychoJS.experiment.addData("stim_val", stimnum_item);
    } else {
        psychoJS.experiment.addData("stim_val", symb_item);
    }
    psychoJS.experiment.addData("proposed_choice", stimnum_item);
    psychoJS.experiment.addData("key_num", keynum_item);
    psychoJS.experiment.addData("stim_type", stim_type);
    psychoJS.experiment.addData("key", key_item);
    psychoJS.experiment.addData("block_type", block_type);
    psychoJS.experiment.addData("tr_old_pre", pre);
    psychoJS.experiment.addData("tr_old_post", post);
    psychoJS.experiment.addData("remap", remap);
    psychoJS.experiment.addData("repeat_count", repeat_count);
    psychoJS.experiment.addData("trial_Count", trial_count);
    psychoJS.experiment.addData("grp_stop", grp_stop);
    psychoJS.experiment.addData("grp_swap", grp_swap);
    psychoJS.experiment.addData("block_num", block_count);
    psychoJS.experiment.addData("prep_time", prep_time);
    psychoJS.experiment.addData("session", session);
    psychoJS.experiment.addData("grp", grp);
    
    // the Routine "Pre_Trial_Hand" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _RT_Press_Hand_allKeys;
var RT_Enter_Trial_HandComponents;
function RT_Enter_Trial_HandRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RT_Enter_Trial_Hand'-------
    t = 0;
    RT_Enter_Trial_HandClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    RT_Rec_Frame_Hand.setOpacity(rec_frame_opacity);
    RT_Rec_Frame_Hand.setLineColor(new util.Color(rec_frame_color));
    RT_Rec_Frame_Hand.setLineWidth(rec_wd);
    RT_Press_Hand.keys = undefined;
    RT_Press_Hand.rt = undefined;
    _RT_Press_Hand_allKeys = [];
    RT_HandShape.setImage(hand_shape);
    RT_Stim_Hand.setPos(position_item);
    // keep track of which components have finished
    RT_Enter_Trial_HandComponents = [];
    RT_Enter_Trial_HandComponents.push(RT_Rec_Frame_Hand);
    RT_Enter_Trial_HandComponents.push(RT_Press_Hand);
    RT_Enter_Trial_HandComponents.push(RT_HandShape);
    RT_Enter_Trial_HandComponents.push(RT_Stim_Hand);
    
    for (const thisComponent of RT_Enter_Trial_HandComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function RT_Enter_Trial_HandRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RT_Enter_Trial_Hand'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RT_Enter_Trial_HandClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *RT_Rec_Frame_Hand* updates
    if (t >= 0.0 && RT_Rec_Frame_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Rec_Frame_Hand.tStart = t;  // (not accounting for frame time here)
      RT_Rec_Frame_Hand.frameNStart = frameN;  // exact frame index
      
      RT_Rec_Frame_Hand.setAutoDraw(true);
    }

    
    // *RT_Press_Hand* updates
    if (t >= 0.0 && RT_Press_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Press_Hand.tStart = t;  // (not accounting for frame time here)
      RT_Press_Hand.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { RT_Press_Hand.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { RT_Press_Hand.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { RT_Press_Hand.clearEvents(); });
    }

    if (RT_Press_Hand.status === PsychoJS.Status.STARTED) {
      let theseKeys = RT_Press_Hand.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _RT_Press_Hand_allKeys = _RT_Press_Hand_allKeys.concat(theseKeys);
      if (_RT_Press_Hand_allKeys.length > 0) {
        RT_Press_Hand.keys = _RT_Press_Hand_allKeys[0].name;  // just the first key pressed
        RT_Press_Hand.rt = _RT_Press_Hand_allKeys[0].rt;
        // was this correct?
        if (RT_Press_Hand.keys == key_item) {
            RT_Press_Hand.corr = 1;
        } else {
            RT_Press_Hand.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *RT_HandShape* updates
    if (t >= 0.0 && RT_HandShape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_HandShape.tStart = t;  // (not accounting for frame time here)
      RT_HandShape.frameNStart = frameN;  // exact frame index
      
      RT_HandShape.setAutoDraw(true);
    }

    
    // *RT_Stim_Hand* updates
    if (t >= 0.0 && RT_Stim_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Stim_Hand.tStart = t;  // (not accounting for frame time here)
      RT_Stim_Hand.frameNStart = frameN;  // exact frame index
      
      RT_Stim_Hand.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RT_Enter_Trial_HandComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var sound_vol;
var feedback_dur;
var feedback_col;
var actual_press;
var rt;
var actual_choice;
function RT_Enter_Trial_HandRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RT_Enter_Trial_Hand'-------
    for (const thisComponent of RT_Enter_Trial_HandComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    corr = 0;
    sound_vol = 0;
    if (RT_Press_Hand.corr) {
        corr = 1;
        feedback_dur = 0.3;
        feedback_col = color_p;
        sound_vol = 1;
    } else {
        corr = 0;
        feedback_dur = 1;
        feedback_col = color_n;
    }
    actual_press = RT_Press_Hand.keys;
    rt = RT_Press_Hand.rt;
    actual_choice = key_list.indexOf(actual_press);
    psychoJS.experiment.addData("actual_press", actual_press);
    psychoJS.experiment.addData("rt", rt);
    psychoJS.experiment.addData("actual_choice", actual_choice);
    psychoJS.experiment.addData("correct", corr);
    if ((trial_count < num_trials_hand)) {
        trial_count = (trial_count + 1);
    }
    
    // was no response the correct answer?!
    if (RT_Press_Hand.keys === undefined) {
      if (['None','none',undefined].includes(key_item)) {
         RT_Press_Hand.corr = 1;  // correct non-response
      } else {
         RT_Press_Hand.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('RT_Press_Hand.keys', RT_Press_Hand.keys);
    psychoJS.experiment.addData('RT_Press_Hand.corr', RT_Press_Hand.corr);
    if (typeof RT_Press_Hand.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('RT_Press_Hand.rt', RT_Press_Hand.rt);
        routineTimer.reset();
        }
    
    RT_Press_Hand.stop();
    // the Routine "RT_Enter_Trial_Hand" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var RT_Feedback_HandComponents;
function RT_Feedback_HandRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RT_Feedback_Hand'-------
    t = 0;
    RT_Feedback_HandClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    RT_Feedback_Coin_Hand = new sound.Sound({
    win: psychoJS.window,
    value: coin,
    secs: -1,
    });
    RT_Feedback_Coin_Hand.setVolume(sound_vol);
    RT_Rec_Frame_Feedback_Hand.setOpacity(rec_frame_opacity);
    RT_Rec_Frame_Feedback_Hand.setLineColor(new util.Color(rec_frame_color));
    RT_Rec_Frame_Feedback_Hand.setLineWidth(rec_wd);
    RT_Feedback_HandShape.setImage(hand_shape);
    RT_Stim_Feedback_Hand.setPos(position_item);
    RT_Stim_Feedback_Hand.setFillColor(new util.Color(feedback_col));
    RT_Stim_Feedback_Hand.setLineColor(new util.Color(feedback_col));
    // keep track of which components have finished
    RT_Feedback_HandComponents = [];
    RT_Feedback_HandComponents.push(RT_Feedback_Coin_Hand);
    RT_Feedback_HandComponents.push(RT_Rec_Frame_Feedback_Hand);
    RT_Feedback_HandComponents.push(RT_Feedback_HandShape);
    RT_Feedback_HandComponents.push(RT_Stim_Feedback_Hand);
    
    for (const thisComponent of RT_Feedback_HandComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function RT_Feedback_HandRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RT_Feedback_Hand'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RT_Feedback_HandClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop RT_Feedback_Coin_Hand
    if (t >= 0.0 && RT_Feedback_Coin_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Feedback_Coin_Hand.tStart = t;  // (not accounting for frame time here)
      RT_Feedback_Coin_Hand.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ RT_Feedback_Coin_Hand.play(); });  // screen flip
      RT_Feedback_Coin_Hand.status = PsychoJS.Status.STARTED;
    }
    
    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;
    if (t >= frameRemains && RT_Feedback_Coin_Hand.status === PsychoJS.Status.STARTED) {
    //  RT_Feedback_Coin_Hand.stop();  // stop the sound (if longer than duration)
      RT_Feedback_Coin_Hand.status = PsychoJS.Status.FINISHED;
    }
    
    // *RT_Rec_Frame_Feedback_Hand* updates
    if (t >= 0.0 && RT_Rec_Frame_Feedback_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Rec_Frame_Feedback_Hand.tStart = t;  // (not accounting for frame time here)
      RT_Rec_Frame_Feedback_Hand.frameNStart = frameN;  // exact frame index
      
      RT_Rec_Frame_Feedback_Hand.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RT_Rec_Frame_Feedback_Hand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RT_Rec_Frame_Feedback_Hand.setAutoDraw(false);
    }
    
    // *RT_Feedback_HandShape* updates
    if (t >= 0.0 && RT_Feedback_HandShape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Feedback_HandShape.tStart = t;  // (not accounting for frame time here)
      RT_Feedback_HandShape.frameNStart = frameN;  // exact frame index
      
      RT_Feedback_HandShape.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RT_Feedback_HandShape.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RT_Feedback_HandShape.setAutoDraw(false);
    }
    
    // *RT_Stim_Feedback_Hand* updates
    if (t >= 0.0 && RT_Stim_Feedback_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Stim_Feedback_Hand.tStart = t;  // (not accounting for frame time here)
      RT_Stim_Feedback_Hand.frameNStart = frameN;  // exact frame index
      
      RT_Stim_Feedback_Hand.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RT_Stim_Feedback_Hand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RT_Stim_Feedback_Hand.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RT_Feedback_HandComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RT_Feedback_HandRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RT_Feedback_Hand'-------
    for (const thisComponent of RT_Feedback_HandComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
   // RT_Feedback_Coin_Hand.stop();  // ensure sound has stopped at end of routine
    // the Routine "RT_Feedback_Hand" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_HAND_TR_press_allKeys;
var Instr_TR_HandComponents;
function Instr_TR_HandRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_TR_Hand'-------
    t = 0;
    Instr_TR_HandClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instr_HAND_TR_text.setText(instr_tr_text_hand);
    Instr_HAND_TR_press.keys = undefined;
    Instr_HAND_TR_press.rt = undefined;
    _Instr_HAND_TR_press_allKeys = [];
    block_type = "TR";
    stim_type = "Hand";
    remap = 0;
    block_count = 0;
    
    // keep track of which components have finished
    Instr_TR_HandComponents = [];
    Instr_TR_HandComponents.push(instr_HAND_TR_text);
    Instr_TR_HandComponents.push(Instr_HAND_TR_press);
    
    for (const thisComponent of Instr_TR_HandComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_TR_HandRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_TR_Hand'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_TR_HandClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_HAND_TR_text* updates
    if (t >= 0.0 && instr_HAND_TR_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_HAND_TR_text.tStart = t;  // (not accounting for frame time here)
      instr_HAND_TR_text.frameNStart = frameN;  // exact frame index
      
      instr_HAND_TR_text.setAutoDraw(true);
    }

    
    // *Instr_HAND_TR_press* updates
    if (t >= 0.0 && Instr_HAND_TR_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_HAND_TR_press.tStart = t;  // (not accounting for frame time here)
      Instr_HAND_TR_press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_HAND_TR_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_HAND_TR_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_HAND_TR_press.clearEvents(); });
    }

    if (Instr_HAND_TR_press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_HAND_TR_press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_HAND_TR_press_allKeys = _Instr_HAND_TR_press_allKeys.concat(theseKeys);
      if (_Instr_HAND_TR_press_allKeys.length > 0) {
        Instr_HAND_TR_press.keys = _Instr_HAND_TR_press_allKeys[0].name;  // just the first key pressed
        Instr_HAND_TR_press.rt = _Instr_HAND_TR_press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_TR_HandComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_TR_HandRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_TR_Hand'-------
    for (const thisComponent of Instr_TR_HandComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_HAND_TR_press.keys', Instr_HAND_TR_press.keys);
    if (typeof Instr_HAND_TR_press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_HAND_TR_press.rt', Instr_HAND_TR_press.rt);
        routineTimer.reset();
        }
    
    Instr_HAND_TR_press.stop();
    // the Routine "Instr_TR_Hand" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_Block_Num_Press_allKeys;
var Instr_Block_NumComponents;
function Instr_Block_NumRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_Block_Num'-------
    t = 0;
    Instr_Block_NumClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_Block_Num_Text.setText((('Block ' + block_count) + '\nPress (H, U, I, or L) to start'));
    Instr_Block_Num_Press.keys = undefined;
    Instr_Block_Num_Press.rt = undefined;
    _Instr_Block_Num_Press_allKeys = [];
    // keep track of which components have finished
    Instr_Block_NumComponents = [];
    Instr_Block_NumComponents.push(Instr_Block_Num_Text);
    Instr_Block_NumComponents.push(Instr_Block_Num_Press);
    
    for (const thisComponent of Instr_Block_NumComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_Block_NumRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_Block_Num'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_Block_NumClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_Block_Num_Text* updates
    if (t >= 0.0 && Instr_Block_Num_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Block_Num_Text.tStart = t;  // (not accounting for frame time here)
      Instr_Block_Num_Text.frameNStart = frameN;  // exact frame index
      
      Instr_Block_Num_Text.setAutoDraw(true);
    }

    
    // *Instr_Block_Num_Press* updates
    if (t >= 1 && Instr_Block_Num_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Block_Num_Press.tStart = t;  // (not accounting for frame time here)
      Instr_Block_Num_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_Block_Num_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_Block_Num_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_Block_Num_Press.clearEvents(); });
    }

    if (Instr_Block_Num_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_Block_Num_Press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_Block_Num_Press_allKeys = _Instr_Block_Num_Press_allKeys.concat(theseKeys);
      if (_Instr_Block_Num_Press_allKeys.length > 0) {
        Instr_Block_Num_Press.keys = _Instr_Block_Num_Press_allKeys[0].name;  // just the first key pressed
        Instr_Block_Num_Press.rt = _Instr_Block_Num_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_Block_NumComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_Block_NumRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_Block_Num'-------
    for (const thisComponent of Instr_Block_NumComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_Block_Num_Press.keys', Instr_Block_Num_Press.keys);
    if (typeof Instr_Block_Num_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_Block_Num_Press.rt', Instr_Block_Num_Press.rt);
        routineTimer.reset();
        }
    
    Instr_Block_Num_Press.stop();
    // the Routine "Instr_Block_Num" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var tr_press_early;
var tr_press_late;
var tr_press_tooearly;
var tr_press_toolate;
var tr_penalty;
var tr_feedback;
var _TR_Press_Hand_allKeys;
var TR_Enter_Trials_HandComponents;
function TR_Enter_Trials_HandRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_Enter_Trials_Hand'-------
    t = 0;
    TR_Enter_Trials_HandClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    TR_Beep_Hand = new sound.Sound({
    win: psychoJS.window,
    value: beep,
    secs: -1,
    });
    TR_Beep_Hand.setVolume(1);
    routineTimer.reset(time_limit);
    tr_press_early = 0;
    tr_press_late = 0;
    tr_press_tooearly = 0;
    tr_press_toolate = 0;
    tr_penalty = 0;
    tr_feedback = 0;
    
    TR_Rec_Frame_Hand.setOpacity(rec_frame_opacity);
    TR_Rec_Frame_Hand.setLineColor(new util.Color(rec_frame_color));
    TR_Rec_Frame_Hand.setLineWidth(rec_wd);
    TR_HandShape.setImage(hand_shape);
    TR_Stim_Hand.setPos(position_item);
    TR_Press_Hand.keys = undefined;
    TR_Press_Hand.rt = undefined;
    _TR_Press_Hand_allKeys = [];
    // keep track of which components have finished
    TR_Enter_Trials_HandComponents = [];
    TR_Enter_Trials_HandComponents.push(TR_Beep_Hand);
    TR_Enter_Trials_HandComponents.push(TR_Rec_Frame_Hand);
    TR_Enter_Trials_HandComponents.push(TR_HandShape);
    TR_Enter_Trials_HandComponents.push(TR_Stim_Hand);
    TR_Enter_Trials_HandComponents.push(TR_Press_Hand);
    
    for (const thisComponent of TR_Enter_Trials_HandComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_Enter_Trials_HandRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_Enter_Trials_Hand'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TR_Enter_Trials_HandClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop TR_Beep_Hand
    if (t >= 0.0 && TR_Beep_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Beep_Hand.tStart = t;  // (not accounting for frame time here)
      TR_Beep_Hand.frameNStart = frameN;  // exact frame index
      psychoJS.window.callOnFlip(function(){ TR_Beep_Hand.play(); });  // screen flip
      TR_Beep_Hand.status = PsychoJS.Status.STARTED;
      
    }
    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t >= frameRemains && TR_Beep_Hand.status === PsychoJS.Status.STARTED) {
      TR_Beep_Hand.stop();  // stop the sound (if longer than duration)
      TR_Beep_Hand.status = PsychoJS.Status.FINISHED;
    }
    
    // *TR_Rec_Frame_Hand* updates
    if (t >= 0.0 && TR_Rec_Frame_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Rec_Frame_Hand.tStart = t;  // (not accounting for frame time here)
      TR_Rec_Frame_Hand.frameNStart = frameN;  // exact frame index
      
      TR_Rec_Frame_Hand.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Rec_Frame_Hand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Rec_Frame_Hand.setAutoDraw(false);
    }
    
    // *TR_HandShape* updates
    if (t >= 0.0 && TR_HandShape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_HandShape.tStart = t;  // (not accounting for frame time here)
      TR_HandShape.frameNStart = frameN;  // exact frame index
      
      TR_HandShape.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_HandShape.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_HandShape.setAutoDraw(false);
    }
    
    // *TR_Stim_Hand* updates
    if (t >= stim_start_time && TR_Stim_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Stim_Hand.tStart = t;  // (not accounting for frame time here)
      TR_Stim_Hand.frameNStart = frameN;  // exact frame index
      
      TR_Stim_Hand.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Stim_Hand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Stim_Hand.setAutoDraw(false);
    }
    
    // *TR_Press_Hand* updates
    if (t >= 0.0 && TR_Press_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Press_Hand.tStart = t;  // (not accounting for frame time here)
      TR_Press_Hand.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TR_Press_Hand.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TR_Press_Hand.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TR_Press_Hand.clearEvents(); });
    }

    frameRemains = 0.0 + time_limit - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Press_Hand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Press_Hand.status = PsychoJS.Status.FINISHED;
  }

    if (TR_Press_Hand.status === PsychoJS.Status.STARTED) {
      let theseKeys = TR_Press_Hand.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _TR_Press_Hand_allKeys = _TR_Press_Hand_allKeys.concat(theseKeys);
      if (_TR_Press_Hand_allKeys.length > 0) {
        TR_Press_Hand.keys = _TR_Press_Hand_allKeys[0].name;  // just the first key pressed
        TR_Press_Hand.rt = _TR_Press_Hand_allKeys[0].rt;
        // was this correct?
        if (TR_Press_Hand.keys == key_item) {
            TR_Press_Hand.corr = 1;
        } else {
            TR_Press_Hand.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_Enter_Trials_HandComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var tr_feedback_text_color;
function TR_Enter_Trials_HandRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_Enter_Trials_Hand'-------
    for (const thisComponent of TR_Enter_Trials_HandComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    //TR_Beep_Hand.stop();  // ensure sound has stopped at end of routine
    sound_vol = 0;
    if ((TR_Press_Hand.keys !== undefined)) {
        if (TR_Press_Hand.corr) {
            corr = 1;
            feedback_col = color_p;
        } else {
            corr = 0;
            feedback_col = color_n;
        }
        if ((TR_Press_Hand.rt < ((time_limit - 0.2) - 0.3))) {
            tr_press_tooearly = 1;
            tr_penalty = 1;
        } else {
            tr_feedback = 1;
            tr_timing_good = (tr_timing_good + 1);
            if ((TR_Press_Hand.rt < ((time_limit - 0.2) - timing_tol_early))) {
                tr_press_early = 1;
            } else {
                if ((TR_Press_Hand.rt > ((time_limit - 0.2) + timing_tol_late))) {
                    tr_press_late = 1;
                }
            }
        }
    } else {
        corr = 0;
        tr_press_toolate = 1;
        tr_penalty = 1;
    }
    if (((((corr === 1) && (tr_press_early === 0)) && (tr_press_late === 0)) && (tr_feedback === 1))) {
        sound_vol = 1;
    }
    feedback_dur = 0.3;
    tr_feedback_text_color = [1, 1, 1];
    if ((tr_penalty === 1)) {
        if ((tr_press_toolate === 1)) {
            tr_penalty_text = penalty_toolate_text;
        } else {
            if ((tr_press_tooearly === 1)) {
                tr_penalty_text = penalty_tooearly_text;
            }
        }
    } else {
        if ((tr_feedback === 1)) {
            if ((tr_press_late === 1)) {
                tr_feedback_text = feedback_late_text;
            } else {
                if ((tr_press_early === 1)) {
                    tr_feedback_text = feedback_early_text;
                } else {
                    tr_feedback_text = feedback_good_text;
                }
            }
        }
    }
    if ((TR_Press_Hand.keys !== undefined)) {
        actual_press = TR_Press_Hand.keys;
        rt = TR_Press_Hand.rt;
        actual_choice = key_list.indexOf(actual_press);
    } else {
        actual_press = "a";
        rt = 99;
        actual_choice = num_symb;
    }
    psychoJS.experiment.addData("actual_press", actual_press);
    psychoJS.experiment.addData("rt", rt);
    psychoJS.experiment.addData("actual_choice", actual_choice);
    psychoJS.experiment.addData("correct", corr);
    if ((trial_count < num_trials_hand)) {
        trial_count = (trial_count + 1);
    }
    
    // was no response the correct answer?!
    if (TR_Press_Hand.keys === undefined) {
      if (['None','none',undefined].includes(key_item)) {
         TR_Press_Hand.corr = 1;  // correct non-response
      } else {
         TR_Press_Hand.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('TR_Press_Hand.keys', TR_Press_Hand.keys);
    psychoJS.experiment.addData('TR_Press_Hand.corr', TR_Press_Hand.corr);
    if (typeof TR_Press_Hand.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('TR_Press_Hand.rt', TR_Press_Hand.rt);
        }
    
    TR_Press_Hand.stop();
    // the Routine "TR_Enter_Trials_Hand" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var TR_Feedback_HandComponents;
function TR_Feedback_HandRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_Feedback_Hand'-------
    t = 0;
    TR_Feedback_HandClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    TR_Feedback_Coin_Hand = new sound.Sound({
    win: psychoJS.window,
    value: coin,
    secs: -1,
    });
    TR_Feedback_Coin_Hand.setVolume(sound_vol);
    Tr_Rec_Frame_Feedback_Hand.setOpacity(rec_frame_opacity);
    Tr_Rec_Frame_Feedback_Hand.setLineColor(new util.Color(rec_frame_color));
    Tr_Rec_Frame_Feedback_Hand.setLineWidth(rec_wd);
    TR_Feedback_Text_Hand.setColor(new util.Color(tr_feedback_text_color));
    TR_Feedback_Text_Hand.setText(tr_feedback_text);
    TR_Feedback_HandShape.setImage(hand_shape);
    TR_Stim_Feedback_Hand.setPos(position_item);
    TR_Stim_Feedback_Hand.setFillColor(new util.Color(feedback_col));
    TR_Stim_Feedback_Hand.setLineColor(new util.Color(feedback_col));
    // keep track of which components have finished
    TR_Feedback_HandComponents = [];
    TR_Feedback_HandComponents.push(TR_Feedback_Coin_Hand);
    TR_Feedback_HandComponents.push(Tr_Rec_Frame_Feedback_Hand);
    TR_Feedback_HandComponents.push(TR_Feedback_Text_Hand);
    TR_Feedback_HandComponents.push(TR_Feedback_HandShape);
    TR_Feedback_HandComponents.push(TR_Stim_Feedback_Hand);
    
    for (const thisComponent of TR_Feedback_HandComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_Feedback_HandRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_Feedback_Hand'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TR_Feedback_HandClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop TR_Feedback_Coin_Hand
    if (t >= 0 && TR_Feedback_Coin_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Feedback_Coin_Hand.tStart = t;  // (not accounting for frame time here)
      TR_Feedback_Coin_Hand.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ TR_Feedback_Coin_Hand.play(); });  // screen flip
      TR_Feedback_Coin_Hand.status = PsychoJS.Status.STARTED;
    }
    
    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t >= frameRemains && TR_Feedback_Coin_Hand.status === PsychoJS.Status.STARTED) {
      //TR_Feedback_Coin_Hand.stop();  // stop the sound (if longer than duration)
      TR_Feedback_Coin_Hand.status = PsychoJS.Status.FINISHED;
    }
    
    // *Tr_Rec_Frame_Feedback_Hand* updates
    if (t >= 0.0 && Tr_Rec_Frame_Feedback_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Tr_Rec_Frame_Feedback_Hand.tStart = t;  // (not accounting for frame time here)
      Tr_Rec_Frame_Feedback_Hand.frameNStart = frameN;  // exact frame index
      
      Tr_Rec_Frame_Feedback_Hand.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Tr_Rec_Frame_Feedback_Hand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Tr_Rec_Frame_Feedback_Hand.setAutoDraw(false);
    }
    
    // *TR_Feedback_Text_Hand* updates
    if (t >= 0.0 && TR_Feedback_Text_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Feedback_Text_Hand.tStart = t;  // (not accounting for frame time here)
      TR_Feedback_Text_Hand.frameNStart = frameN;  // exact frame index
      
      TR_Feedback_Text_Hand.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Feedback_Text_Hand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Feedback_Text_Hand.setAutoDraw(false);
    }
    
    // *TR_Feedback_HandShape* updates
    if (t >= 0.0 && TR_Feedback_HandShape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Feedback_HandShape.tStart = t;  // (not accounting for frame time here)
      TR_Feedback_HandShape.frameNStart = frameN;  // exact frame index
      
      TR_Feedback_HandShape.setAutoDraw(true);
    }

    frameRemains = feedback_dur  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Feedback_HandShape.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Feedback_HandShape.setAutoDraw(false);
    }
    
    // *TR_Stim_Feedback_Hand* updates
    if (t >= 0.0 && TR_Stim_Feedback_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Stim_Feedback_Hand.tStart = t;  // (not accounting for frame time here)
      TR_Stim_Feedback_Hand.frameNStart = frameN;  // exact frame index
      
      TR_Stim_Feedback_Hand.setAutoDraw(true);
    }

    frameRemains = feedback_dur  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Stim_Feedback_Hand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Stim_Feedback_Hand.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_Feedback_HandComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TR_Feedback_HandRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_Feedback_Hand'-------
    for (const thisComponent of TR_Feedback_HandComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
   // TR_Feedback_Coin_Hand.stop();  // ensure sound has stopped at end of routine
    // the Routine "TR_Feedback_Hand" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _TR_Penalty_Press_allKeys;
var TR_PenaltyComponents;
function TR_PenaltyRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_Penalty'-------
    t = 0;
    TR_PenaltyClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    TR_Rec_Frame_Penalty.setLineColor(new util.Color(rec_frame_color));
    TR_Rec_Frame_Penalty.setLineWidth(rec_wd);
    TR_Penalty_Text.setText(tr_penalty_text);
    TR_Penalty_Press.keys = undefined;
    TR_Penalty_Press.rt = undefined;
    _TR_Penalty_Press_allKeys = [];
    // keep track of which components have finished
    TR_PenaltyComponents = [];
    TR_PenaltyComponents.push(TR_Rec_Frame_Penalty);
    TR_PenaltyComponents.push(TR_Penalty_Text);
    TR_PenaltyComponents.push(TR_Penalty_Press);
    
    for (const thisComponent of TR_PenaltyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_PenaltyRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_Penalty'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TR_PenaltyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TR_Rec_Frame_Penalty* updates
    if (t >= 0.0 && TR_Rec_Frame_Penalty.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Rec_Frame_Penalty.tStart = t;  // (not accounting for frame time here)
      TR_Rec_Frame_Penalty.frameNStart = frameN;  // exact frame index
      
      TR_Rec_Frame_Penalty.setAutoDraw(true);
    }

    
    // *TR_Penalty_Text* updates
    if (t >= 0.0 && TR_Penalty_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Penalty_Text.tStart = t;  // (not accounting for frame time here)
      TR_Penalty_Text.frameNStart = frameN;  // exact frame index
      
      TR_Penalty_Text.setAutoDraw(true);
    }

    
    // *TR_Penalty_Press* updates
    if (t >= 2 && TR_Penalty_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Penalty_Press.tStart = t;  // (not accounting for frame time here)
      TR_Penalty_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TR_Penalty_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TR_Penalty_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TR_Penalty_Press.clearEvents(); });
    }

    if (TR_Penalty_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = TR_Penalty_Press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _TR_Penalty_Press_allKeys = _TR_Penalty_Press_allKeys.concat(theseKeys);
      if (_TR_Penalty_Press_allKeys.length > 0) {
        TR_Penalty_Press.keys = _TR_Penalty_Press_allKeys[0].name;  // just the first key pressed
        TR_Penalty_Press.rt = _TR_Penalty_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_PenaltyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TR_PenaltyRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_Penalty'-------
    for (const thisComponent of TR_PenaltyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TR_Penalty_Press.keys', TR_Penalty_Press.keys);
    if (typeof TR_Penalty_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('TR_Penalty_Press.rt', TR_Penalty_Press.rt);
        routineTimer.reset();
        }
    
    TR_Penalty_Press.stop();
    // the Routine "TR_Penalty" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var countdown = 3;
var CountDownComponents;
function CountDownRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'SS_Prac_CountDown'-------
    t = 0;
    CountDownClock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    routineTimer.reset(3);
    TR_Beep.setVolume(0);
    TR_Coin.setVolume(0);
    countdown = 3;
    // keep track of which components have finished
    CountDownComponents = [];
    CountDownComponents.push(Text_CountDown);
    CountDownComponents.push(Number_CountDown);
    CountDownComponents.push(TR_Beep);
    CountDownComponents.push(TR_Coin);

    for (const thisComponent of CountDownComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function CountDownRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'SS_Prac_CountDown'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = CountDownClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((1 <= routineTimer.getTime()) && (routineTimer.getTime() < 2))) {
        countdown = 2;
    } else {
        if ((routineTimer.getTime() < 1)) {
            countdown = 1;
        }
    }
    
    // play sound for warm up
    if (t >= 0.0 && TR_Beep.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Beep.tStart = t;  // (not accounting for frame time here)
      TR_Beep.frameNStart = frameN;  // exact frame index
      psychoJS.window.callOnFlip(function(){ TR_Beep.play(); });  // screen flip
      TR_Beep.status = PsychoJS.Status.STARTED;
      
    }
    frameRemains = 2.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t >= frameRemains && TR_Beep.status === PsychoJS.Status.STARTED) {
      TR_Beep.stop();  // stop the sound (if longer than duration)
      TR_Beep.status = PsychoJS.Status.FINISHED;
    
    }


    // play sound for warm up
    if (t >= 0.0 && TR_Coin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Coin.tStart = t;  // (not accounting for frame time here)
      TR_Coin.frameNStart = frameN;  // exact frame index
      psychoJS.window.callOnFlip(function(){ TR_Coin.play(); });  // screen flip
      TR_Coin.status = PsychoJS.Status.STARTED;
      
    }
    frameRemains = 2.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t >= frameRemains && TR_Coin.status === PsychoJS.Status.STARTED) {
      TR_Coin.stop();  // stop the sound (if longer than duration)
      TR_Coin.status = PsychoJS.Status.FINISHED;
    
    }
    // *Text_SS_Prac_CountDown* updates
    if (t >= 0.0 && Text_CountDown.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_CountDown.tStart = t;  // (not accounting for frame time here)
      Text_CountDown.frameNStart = frameN;  // exact frame index
      
      Text_CountDown.setAutoDraw(true);
    }

    if (t >= 0.0 && Number_CountDown.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Number_CountDown.tStart = t;  // (not accounting for frame time here)
      Number_CountDown.frameNStart = frameN;  // exact frame index
      
      Number_CountDown.setAutoDraw(true);
    }

    frameRemains = 3  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_CountDown.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_CountDown.setAutoDraw(false);
    }

    if (Number_CountDown.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Number_CountDown.setAutoDraw(false);
    }
    
    if (Number_CountDown.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Number_CountDown.setText(countdown);
    }
    
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CountDownComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CountDownRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'SS_Prac_CountDown'-------
    for (const thisComponent of CountDownComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    TR_Beep.stop(); 
    TR_Coin.stop(); 
    return Scheduler.Event.NEXT;
  };
}

var tr_timing_perc;
var TR_Hand_Accuracy_BoolComponents;
function TR_Hand_Accuracy_BoolRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_Hand_Accuracy_Bool'-------
    t = 0;
    TR_Hand_Accuracy_BoolClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((block_count > 1)) {
        tr_timing_perc = (tr_timing_good / num_trials_hand);
        if ((tr_timing_perc > 0.7)) {
            trials.finished = true;
        }
    }
    tr_timing_good = 0;
    
    // keep track of which components have finished
    TR_Hand_Accuracy_BoolComponents = [];
    
    for (const thisComponent of TR_Hand_Accuracy_BoolComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_Hand_Accuracy_BoolRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_Hand_Accuracy_Bool'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TR_Hand_Accuracy_BoolClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_Hand_Accuracy_BoolComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TR_Hand_Accuracy_BoolRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_Hand_Accuracy_Bool'-------
    for (const thisComponent of TR_Hand_Accuracy_BoolComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "TR_Hand_Accuracy_Bool" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_CR_Old_Press_allKeys;
var Instr_CR_OldComponents;
function Instr_CR_OldRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_CR_Old'-------
    t = 0;
    Instr_CR_OldClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_CR_Old_Text.setText(instr_cr_old_text);
    Instr_CR_Old_Press.keys = undefined;
    Instr_CR_Old_Press.rt = undefined;
    _Instr_CR_Old_Press_allKeys = [];
    block_type = "CR";
    stim_type = "Symb";
    block_count = 0;
    remap = 0;
    symb = symb_map;
    //symb_g = symb_g_map;
    //symb_r = symb_r_map;
    
    // keep track of which components have finished
    Instr_CR_OldComponents = [];
    Instr_CR_OldComponents.push(Instr_CR_Old_Text);
    Instr_CR_OldComponents.push(Instr_CR_Old_Press);
    
    for (const thisComponent of Instr_CR_OldComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_CR_OldRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_CR_Old'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_CR_OldClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_CR_Old_Text* updates
    if (t >= 0.0 && Instr_CR_Old_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_CR_Old_Text.tStart = t;  // (not accounting for frame time here)
      Instr_CR_Old_Text.frameNStart = frameN;  // exact frame index
      
      Instr_CR_Old_Text.setAutoDraw(true);
    }

    
    // *Instr_CR_Old_Press* updates
    if (t >= 0.0 && Instr_CR_Old_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_CR_Old_Press.tStart = t;  // (not accounting for frame time here)
      Instr_CR_Old_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_CR_Old_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_CR_Old_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_CR_Old_Press.clearEvents(); });
    }

    if (Instr_CR_Old_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_CR_Old_Press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_CR_Old_Press_allKeys = _Instr_CR_Old_Press_allKeys.concat(theseKeys);
      if (_Instr_CR_Old_Press_allKeys.length > 0) {
        Instr_CR_Old_Press.keys = _Instr_CR_Old_Press_allKeys[0].name;  // just the first key pressed
        Instr_CR_Old_Press.rt = _Instr_CR_Old_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_CR_OldComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_CR_OldRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_CR_Old'-------
    for (const thisComponent of Instr_CR_OldComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_CR_Old_Press.keys', Instr_CR_Old_Press.keys);
    if (typeof Instr_CR_Old_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_CR_Old_Press.rt', Instr_CR_Old_Press.rt);
        routineTimer.reset();
        }
    
    Instr_CR_Old_Press.stop();
    // the Routine "Instr_CR_Old" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var symb_item;
var symb_g_item;
var symb_r_item;
var interval_ind;
var Pre_TrialComponents;
function Pre_TrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Pre_Trial'-------
    t = 0;
    Pre_TrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Pre_Trial_Rec_Frame.setOpacity(rec_frame_opacity);
    Pre_Trial_Rec_Frame.setLineColor(new util.Color(rec_frame_color));
    Pre_Trial_Rec_Frame.setLineWidth(rec_wd);
    stimnum_item = seq_stimnum[trial_count];
    key_item = seq_key[trial_count];
    symb_item = seq_symb[trial_count];
    //symb_g_item = seq_symb_g[trial_count];
    //symb_r_item = seq_symb_r[trial_count];
    keynum_item = seq_keynum[trial_count];
    if ((block_type === "TR")) {
        interval_ind = prep_time_ind[stimnum_item][trial_count_item[stimnum_item]];
        prep_time = ((Math.random() * (prep_time_interval[interval_ind][1] - prep_time_interval[interval_ind][0])) + prep_time_interval[interval_ind][0]);
        stim_start_time = ((prep_time_range[1] - prep_time) + beep_lead_in);
        trial_count_item[stimnum_item] = (trial_count_item[stimnum_item] + 1);
    } else {
        stim_start_time = 99;
        prep_time = 99;
    }
    
    // keep track of which components have finished
    Pre_TrialComponents = [];
    Pre_TrialComponents.push(Pre_Trial_Rec_Frame);
    
    for (const thisComponent of Pre_TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function Pre_TrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Pre_Trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Pre_TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Pre_Trial_Rec_Frame* updates
    if (t >= 0.0 && Pre_Trial_Rec_Frame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pre_Trial_Rec_Frame.tStart = t;  // (not accounting for frame time here)
      Pre_Trial_Rec_Frame.frameNStart = frameN;  // exact frame index
      
      Pre_Trial_Rec_Frame.setAutoDraw(true);
    }

    frameRemains = 0.0 + pre_trial_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pre_Trial_Rec_Frame.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pre_Trial_Rec_Frame.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Pre_TrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pre_TrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Pre_Trial'-------
    for (const thisComponent of Pre_TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((stim_type === "Hand")) {
      psychoJS.experiment.addData("stim_val", stimnum_item);
    } else {
      psychoJS.experiment.addData("stim_val", symb_item);
    }
    psychoJS.experiment.addData("proposed_choice", stimnum_item);
    psychoJS.experiment.addData("key_num", keynum_item);
    psychoJS.experiment.addData("stim_type", stim_type);
    psychoJS.experiment.addData("key", key_item);
    psychoJS.experiment.addData("block_type", block_type);
    psychoJS.experiment.addData("tr_old_pre", pre);
    psychoJS.experiment.addData("tr_old_post", post);
    psychoJS.experiment.addData("remap", remap);
    psychoJS.experiment.addData("repeat_count", repeat_count);
    psychoJS.experiment.addData("trial_Count", trial_count);
    psychoJS.experiment.addData("grp_stop", grp_stop);
    psychoJS.experiment.addData("grp_swap", grp_swap);
    psychoJS.experiment.addData("block_num", block_count);
    psychoJS.experiment.addData("prep_time", prep_time);
    psychoJS.experiment.addData("session", session);
    
    // the Routine "Pre_Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _RT_Press_allKeys;
var RT_Enter_TrialComponents;
function RT_Enter_TrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RT_Enter_Trial'-------
    t = 0;
    RT_Enter_TrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    RT_Rec_Frame.setOpacity(rec_frame_opacity);
    RT_Rec_Frame.setLineColor(new util.Color(rec_frame_color));
    RT_Rec_Frame.setLineWidth(rec_wd);
    //RT_Stim_Image.setImage(symb_item);
    Letter.setColor(new util.Color('white'));
    Letter.setText(symb_item);

    RT_Press.keys = undefined;
    RT_Press.rt = undefined;
    _RT_Press_allKeys = [];
    // keep track of which components have finished
    RT_Enter_TrialComponents = [];
    RT_Enter_TrialComponents.push(RT_Rec_Frame);
    //RT_Enter_TrialComponents.push(RT_Stim_Image);
    RT_Enter_TrialComponents.push(Letter)
    RT_Enter_TrialComponents.push(RT_Press);
    
    for (const thisComponent of RT_Enter_TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function RT_Enter_TrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RT_Enter_Trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RT_Enter_TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *RT_Rec_Frame* updates
    if (t >= 0.0 && RT_Rec_Frame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Rec_Frame.tStart = t;  // (not accounting for frame time here)
      RT_Rec_Frame.frameNStart = frameN;  // exact frame index
      
      RT_Rec_Frame.setAutoDraw(true);
    }

    
    // *RT_Stim_Image* updates
    if (t >= 0.0 && Letter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Letter.tStart = t;  // (not accounting for frame time here)
      Letter.frameNStart = frameN;  // exact frame index
      
      Letter.setAutoDraw(true);
    }

    
    // *RT_Press* updates
    if (t >= 0.0 && RT_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Press.tStart = t;  // (not accounting for frame time here)
      RT_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { RT_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { RT_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { RT_Press.clearEvents(); });
    }

    if (RT_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = RT_Press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _RT_Press_allKeys = _RT_Press_allKeys.concat(theseKeys);
      if (_RT_Press_allKeys.length > 0) {
        RT_Press.keys = _RT_Press_allKeys[0].name;  // just the first key pressed
        RT_Press.rt = _RT_Press_allKeys[0].rt;
        // was this correct?
        if (RT_Press.keys == key_item) {
            RT_Press.corr = 1;
        } else {
            RT_Press.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RT_Enter_TrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var feedback_col;
function RT_Enter_TrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RT_Enter_Trial'-------
    for (const thisComponent of RT_Enter_TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    sound_vol = 0;
    if (RT_Press.corr) {
        corr = 1;
        feedback_col = color_p;
        feedback_dur = 0.3;
        sound_vol = 1;
    } else {
        corr = 0;
        feedback_col = color_n;
        feedback_dur = 1;
    }
    actual_press = RT_Press.keys;
    rt = RT_Press.rt;
    actual_choice = key_list.indexOf(actual_press);
    psychoJS.experiment.addData("actual_press", actual_press);
    psychoJS.experiment.addData("rt", rt);
    psychoJS.experiment.addData("actual_choice", actual_choice);
    psychoJS.experiment.addData("correct", corr);
    if ((block_type === "RT")) {
        trial_count = (trial_count + 1);
    }
    
    // was no response the correct answer?!
    if (RT_Press.keys === undefined) {
      if (['None','none',undefined].includes(key_item)) {
         RT_Press.corr = 1;  // correct non-response
      } else {
         RT_Press.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('RT_Press.keys', RT_Press.keys);
    psychoJS.experiment.addData('RT_Press.corr', RT_Press.corr);
    if (typeof RT_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('RT_Press.rt', RT_Press.rt);
        routineTimer.reset();
        }
    
    RT_Press.stop();
    // the Routine "RT_Enter_Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var RT_FeedbackComponents;
function RT_FeedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RT_Feedback'-------
    t = 0;
    RT_FeedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    CR_Feedback_Coin_Old = new sound.Sound({
    win: psychoJS.window,
    value: coin,
    secs: -1,
    });
    CR_Feedback_Coin_Old.setVolume(sound_vol);
    RT_Rec_Frame_Feedback.setOpacity(rec_frame_opacity);
    RT_Rec_Frame_Feedback.setLineColor(new util.Color(rec_frame_color));
    RT_Rec_Frame_Feedback.setLineWidth(rec_wd);
    //RT_Feedback_Image.setImage(feedback_image);
    Letter.setColor(new util.Color(feedback_col));
    Letter.setText(symb_item);
    // keep track of which components have finished
    RT_FeedbackComponents = [];
    RT_FeedbackComponents.push(CR_Feedback_Coin_Old);
    RT_FeedbackComponents.push(RT_Rec_Frame_Feedback);
    //RT_FeedbackComponents.push(RT_Feedback_Image);
    RT_FeedbackComponents.push(Letter);

    for (const thisComponent of RT_FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function RT_FeedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RT_Feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RT_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop CR_Feedback_Coin_Old
    if (t >= 0.0 && CR_Feedback_Coin_Old.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CR_Feedback_Coin_Old.tStart = t;  // (not accounting for frame time here)
      CR_Feedback_Coin_Old.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ CR_Feedback_Coin_Old.play(); });  // screen flip
      CR_Feedback_Coin_Old.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t >= frameRemains && CR_Feedback_Coin_Old.status === PsychoJS.Status.STARTED) {
      //CR_Feedback_Coin_Old.stop();  // stop the sound (if longer than duration)
      CR_Feedback_Coin_Old.status = PsychoJS.Status.FINISHED;
    }
    
    // *RT_Rec_Frame_Feedback* updates
    if (t >= 0.0 && RT_Rec_Frame_Feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Rec_Frame_Feedback.tStart = t;  // (not accounting for frame time here)
      RT_Rec_Frame_Feedback.frameNStart = frameN;  // exact frame index
      
      RT_Rec_Frame_Feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RT_Rec_Frame_Feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RT_Rec_Frame_Feedback.setAutoDraw(false);
    }
    
    // *RT_Feedback_Image* updates
    if (t >= 0.0 && Letter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Letter.tStart = t;  // (not accounting for frame time here)
      Letter.frameNStart = frameN;  // exact frame index
      
      Letter.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Letter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Letter.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RT_FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RT_FeedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RT_Feedback'-------
    for (const thisComponent of RT_FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    //CR_Feedback_Coin_Old.stop();  // ensure sound has stopped at end of routine
    // the Routine "RT_Feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Criterion_DetComponents;
function Criterion_DetRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Criterion_Det'-------
    t = 0;
    Criterion_DetClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if (((repeat_count === 0) && (corr === 1))) {
        sum_corr[stimnum_item] = (sum_corr[stimnum_item] + 1);
    } else {
        if (((corr === 0) && (sum_corr[stimnum_item] < num_criterion))) {
            sum_corr[stimnum_item] = 0;
        }
    }
    if ((corr === 1)) {
        trial_count = (trial_count + 1);
        repeat_count = 0;
    } else {
        repeat_count = (repeat_count + 1);
    }
    function CR_Crit(ls) {
        for (var i, _pj_c = 0, _pj_a = ls, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            if ((i < num_criterion)) {
                return false;
            }
        }
        return true;
    }

    
    if (remap === 0) {
      if (CR_Crit(sum_corr)) {
        trials.finished =  true;
      }
    } else if (remap === 1) {
      
      // extract those used elements
      sum_corr_subset = []
      for (var i = 0, _pj_a = subset_dummie.length; (i < _pj_a); i += 1) {
        sum_corr_subset.push(sum_corr[subset_dummie[i]])
      }
        console.log(subset_dummie)
        console.log(sum_corr)
        console.log(sum_corr_subset)

      if (CR_Crit(sum_corr_subset)) {
        trials.finished =  true;
      }
    }
    
    // keep track of which components have finished
    Criterion_DetComponents = [];
    
    for (const thisComponent of Criterion_DetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Criterion_DetRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Criterion_Det'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Criterion_DetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Criterion_DetComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Criterion_DetRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Criterion_Det'-------
    for (const thisComponent of Criterion_DetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Criterion_Det" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_TR_Old_Pre_Press_allKeys;
var Instr_TR_Old_PreComponents;
function Instr_TR_Old_PreRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_TR_Old_Pre'-------
    t = 0;
    Instr_TR_Old_PreClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_TR_Old_Pre_text.setText(instr_tr_old_pre_text);
    Instr_TR_Old_Pre_Press.keys = undefined;
    Instr_TR_Old_Pre_Press.rt = undefined;
    _Instr_TR_Old_Pre_Press_allKeys = [];
    block_type = "TR";
    stim_type = "Symb";
    remap = 0;
    block_count = 0;
    pre = 1;
    symb = symb_map;
    //symb_g = symb_g_map;
    //symb_r = symb_r_map;
    
    // keep track of which components have finished
    Instr_TR_Old_PreComponents = [];
    Instr_TR_Old_PreComponents.push(Instr_TR_Old_Pre_text);
    Instr_TR_Old_PreComponents.push(Instr_TR_Old_Pre_Press);
    
    for (const thisComponent of Instr_TR_Old_PreComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_TR_Old_PreRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_TR_Old_Pre'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_TR_Old_PreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_TR_Old_Pre_text* updates
    if (t >= 0.0 && Instr_TR_Old_Pre_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_TR_Old_Pre_text.tStart = t;  // (not accounting for frame time here)
      Instr_TR_Old_Pre_text.frameNStart = frameN;  // exact frame index
      
      Instr_TR_Old_Pre_text.setAutoDraw(true);
    }

    
    // *Instr_TR_Old_Pre_Press* updates
    if (t >= 0.0 && Instr_TR_Old_Pre_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_TR_Old_Pre_Press.tStart = t;  // (not accounting for frame time here)
      Instr_TR_Old_Pre_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_TR_Old_Pre_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_TR_Old_Pre_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_TR_Old_Pre_Press.clearEvents(); });
    }

    if (Instr_TR_Old_Pre_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_TR_Old_Pre_Press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_TR_Old_Pre_Press_allKeys = _Instr_TR_Old_Pre_Press_allKeys.concat(theseKeys);
      if (_Instr_TR_Old_Pre_Press_allKeys.length > 0) {
        Instr_TR_Old_Pre_Press.keys = _Instr_TR_Old_Pre_Press_allKeys[0].name;  // just the first key pressed
        Instr_TR_Old_Pre_Press.rt = _Instr_TR_Old_Pre_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_TR_Old_PreComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_TR_Old_PreRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_TR_Old_Pre'-------
    for (const thisComponent of Instr_TR_Old_PreComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_TR_Old_Pre_Press.keys', Instr_TR_Old_Pre_Press.keys);
    if (typeof Instr_TR_Old_Pre_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_TR_Old_Pre_Press.rt', Instr_TR_Old_Pre_Press.rt);
        routineTimer.reset();
        }
    
    Instr_TR_Old_Pre_Press.stop();
    // the Routine "Instr_TR_Old_Pre" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _TR_Press_allKeys;
var TR_Enter_TrialsComponents;
function TR_Enter_TrialsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_Enter_Trials'-------
    t = 0;
    TR_Enter_TrialsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    TR_Beep_Hand = new sound.Sound({
    win: psychoJS.window,
    value: beep,
    secs: -1,
    });
    TR_Beep_Hand.setVolume(1);
    routineTimer.reset(time_limit);
    tr_press_early = 0;
    tr_press_late = 0;
    tr_press_tooearly = 0;
    tr_press_toolate = 0;
    tr_penalty = 0;
    tr_feedback = 0;
    
    TR_Rec_Frame.setOpacity(rec_frame_opacity);
    TR_Rec_Frame.setLineColor(new util.Color(rec_frame_color));
    TR_Rec_Frame.setLineWidth(rec_wd);
    //TR_Stim_Image.setImage(symb_item);
    Letter.setColor(new util.Color('white'));
    Letter.setText(symb_item);
    TR_Press.keys = undefined;
    TR_Press.rt = undefined;
    _TR_Press_allKeys = [];
    // keep track of which components have finished
    TR_Enter_TrialsComponents = [];
    TR_Enter_TrialsComponents.push(TR_Beep_Hand);
    TR_Enter_TrialsComponents.push(TR_Rec_Frame);
    //TR_Enter_TrialsComponents.push(TR_Stim_Image);
    TR_Enter_TrialsComponents.push(Letter);
    TR_Enter_TrialsComponents.push(TR_Press);
    
    for (const thisComponent of TR_Enter_TrialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_Enter_TrialsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_Enter_Trials'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TR_Enter_TrialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop TR_Beep
    if (t >= 0.0 && TR_Beep_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Beep_Hand.tStart = t;  // (not accounting for frame time here)
      TR_Beep_Hand.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ TR_Beep_Hand.play(); });  // screen flip
      TR_Beep_Hand.status = PsychoJS.Status.STARTED;
    }
    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t >= frameRemains && TR_Beep_Hand.status === PsychoJS.Status.STARTED) {
      //TR_Beep.stop();  // stop the sound (if longer than duration)
      TR_Beep_Hand.status = PsychoJS.Status.FINISHED;
    }
    
    // *TR_Rec_Frame* updates
    if (t >= 0.0 && TR_Rec_Frame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Rec_Frame.tStart = t;  // (not accounting for frame time here)
      TR_Rec_Frame.frameNStart = frameN;  // exact frame index
      
      TR_Rec_Frame.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Rec_Frame.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Rec_Frame.setAutoDraw(false);
    }
    
    // *TR_Stim_Image* updates
    if (t >= stim_start_time && Letter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Letter.tStart = t;  // (not accounting for frame time here)
      Letter.frameNStart = frameN;  // exact frame index
      
      Letter.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Letter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Letter.setAutoDraw(false);
    }
    
    // *TR_Press* updates
    if (t >= 0.0 && TR_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Press.tStart = t;  // (not accounting for frame time here)
      TR_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TR_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TR_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TR_Press.clearEvents(); });
    }

    frameRemains = 0.0 + time_limit - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Press.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Press.status = PsychoJS.Status.FINISHED;
  }

    if (TR_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = TR_Press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _TR_Press_allKeys = _TR_Press_allKeys.concat(theseKeys);
      if (_TR_Press_allKeys.length > 0) {
        TR_Press.keys = _TR_Press_allKeys[0].name;  // just the first key pressed
        TR_Press.rt = _TR_Press_allKeys[0].rt;
        // was this correct?
        if (TR_Press.keys == key_item) {
            TR_Press.corr = 1;
        } else {
            TR_Press.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_Enter_TrialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TR_Enter_TrialsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_Enter_Trials'-------
    for (const thisComponent of TR_Enter_TrialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    //TR_Beep.stop();  // ensure sound has stopped at end of routine
    sound_vol = 0;
    if ((TR_Press.keys !== undefined)) {
        if (TR_Press.corr) {
            corr = 1;
            feedback_col = color_p;
        } else {
            corr = 0;
            feedback_col = color_n;
        }
        if ((TR_Press.rt < ((time_limit - 0.2) - 0.3))) {
            tr_press_tooearly = 1;
            tr_penalty = 1;
        } else {
            tr_feedback = 1;
            tr_timing_good = (tr_timing_good + 1);
            if ((TR_Press.rt < ((time_limit - 0.2) - timing_tol_early))) {
                tr_press_early = 1;
            } else {
                if ((TR_Press.rt > ((time_limit - 0.2) + timing_tol_late))) {
                    tr_press_late = 1;
                }
            }
        }
    } else {
        corr = 0;
        tr_press_toolate = 1;
        tr_penalty = 1;
    }
    if (((((corr === 1) && (tr_press_early === 0)) && (tr_press_late === 0)) && (tr_feedback === 1))) {
        sound_vol = 1;
    }
    feedback_dur = 0.3;
    tr_feedback_text_color = [1, 1, 1];
    if ((tr_penalty === 1)) {
        if ((tr_press_toolate === 1)) {
            tr_penalty_text = penalty_toolate_text;
        } else {
            if ((tr_press_tooearly === 1)) {
                tr_penalty_text = penalty_tooearly_text;
            }
        }
    } else {
        if ((tr_feedback === 1)) {
            if ((tr_press_late === 1)) {
                tr_feedback_text = feedback_late_text;
            } else {
                if ((tr_press_early === 1)) {
                    tr_feedback_text = feedback_early_text;
                } else {
                    tr_feedback_text = feedback_good_text;
                }
            }
        }
    }
    if ((TR_Press.keys !== undefined)) {
        actual_press = TR_Press.keys;
        rt = TR_Press.rt;
        actual_choice = key_list.indexOf(actual_press);
    } else {
        actual_press = "a";
        rt = 99;
        actual_choice = num_symb;
    }
    psychoJS.experiment.addData("actual_press", actual_press);
    psychoJS.experiment.addData("rt", rt);
    psychoJS.experiment.addData("actual_choice", actual_choice);
    psychoJS.experiment.addData("correct", corr);
    if ((trial_count < num_trials)) {
        trial_count = (trial_count + 1);
    }
    
    // was no response the correct answer?!
    if (TR_Press.keys === undefined) {
      if (['None','none',undefined].includes(key_item)) {
         TR_Press.corr = 1;  // correct non-response
      } else {
         TR_Press.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('TR_Press.keys', TR_Press.keys);
    psychoJS.experiment.addData('TR_Press.corr', TR_Press.corr);
    if (typeof TR_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('TR_Press.rt', TR_Press.rt);
        }
    
    TR_Press.stop();
    // the Routine "TR_Enter_Trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var TR_FeedbackComponents;
function TR_FeedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_Feedback'-------
    t = 0;
    TR_FeedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    TR_Feedback_Coin = new sound.Sound({
    win: psychoJS.window,
    value: coin,
    secs: -1,
    });
    TR_Feedback_Coin.setVolume(sound_vol);
    Tr_Rec_Frame_Feedback.setOpacity(rec_frame_opacity);
    Tr_Rec_Frame_Feedback.setLineColor(new util.Color(rec_frame_color));
    Tr_Rec_Frame_Feedback.setLineWidth(rec_wd);
    TR_Feedback_Text.setColor(new util.Color(tr_feedback_text_color));
    TR_Feedback_Text.setText(tr_feedback_text);
    //TR_Feedback_Image.setImage(feedback_image);
    Letter.setText(symb_item);
    Letter.setColor(new util.Color(feedback_col));
    // keep track of which components have finished
    TR_FeedbackComponents = [];
    TR_FeedbackComponents.push(TR_Feedback_Coin);
    TR_FeedbackComponents.push(Tr_Rec_Frame_Feedback);
    TR_FeedbackComponents.push(TR_Feedback_Text);
    //TR_FeedbackComponents.push(TR_Feedback_Image);
    TR_FeedbackComponents.push(Letter);
    
    for (const thisComponent of TR_FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_FeedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_Feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TR_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop TR_Feedback_Coin
    if (t >= 0.0 && TR_Feedback_Coin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Feedback_Coin.tStart = t;  // (not accounting for frame time here)
      TR_Feedback_Coin.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ TR_Feedback_Coin.play(); });  // screen flip
      TR_Feedback_Coin.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t >= frameRemains && TR_Feedback_Coin.status === PsychoJS.Status.STARTED) {
      //TR_Feedback_Coin.stop();  // stop the sound (if longer than duration)
      TR_Feedback_Coin.status = PsychoJS.Status.FINISHED;
    }
    
    // *Tr_Rec_Frame_Feedback* updates
    if (t >= 0.0 && Tr_Rec_Frame_Feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Tr_Rec_Frame_Feedback.tStart = t;  // (not accounting for frame time here)
      Tr_Rec_Frame_Feedback.frameNStart = frameN;  // exact frame index
      
      Tr_Rec_Frame_Feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Tr_Rec_Frame_Feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Tr_Rec_Frame_Feedback.setAutoDraw(false);
    }
    
    // *TR_Feedback_Text* updates
    if (t >= 0.0 && TR_Feedback_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Feedback_Text.tStart = t;  // (not accounting for frame time here)
      TR_Feedback_Text.frameNStart = frameN;  // exact frame index
      
      TR_Feedback_Text.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Feedback_Text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Feedback_Text.setAutoDraw(false);
    }
    
    // *TR_Feedback_Image* updates
    if (t >= 0.0 && Letter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Letter.tStart = t;  // (not accounting for frame time here)
      Letter.frameNStart = frameN;  // exact frame index
      
      Letter.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Letter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Letter.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TR_FeedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_Feedback'-------
    for (const thisComponent of TR_FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    //TR_Feedback_Coin.stop();  // ensure sound has stopped at end of routine
    // the Routine "TR_Feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_RT_Press_allKeys;
var Instr_RTComponents;
function Instr_RTRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_RT'-------
    t = 0;
    Instr_RTClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_RT_Text.setText(instr_rt_text);
    Instr_RT_Press.keys = undefined;
    Instr_RT_Press.rt = undefined;
    _Instr_RT_Press_allKeys = [];
    block_type = "RT";
    stim_type = "Symb";
    remap = 0;
    if ((session === 1)) {
        block_count = 0;
    } else {
        if ((session === 2)) {
            block_count = 5;
        }
    }
    symb = symb_map;
    //symb_g = symb_g_map;
    //symb_r = symb_r_map;
    
    // keep track of which components have finished
    Instr_RTComponents = [];
    Instr_RTComponents.push(Instr_RT_Text);
    Instr_RTComponents.push(Instr_RT_Press);
    
    for (const thisComponent of Instr_RTComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_RTRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_RT'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_RTClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_RT_Text* updates
    if (t >= 0.0 && Instr_RT_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_RT_Text.tStart = t;  // (not accounting for frame time here)
      Instr_RT_Text.frameNStart = frameN;  // exact frame index
      
      Instr_RT_Text.setAutoDraw(true);
    }

    
    // *Instr_RT_Press* updates
    if (t >= 0.0 && Instr_RT_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_RT_Press.tStart = t;  // (not accounting for frame time here)
      Instr_RT_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_RT_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_RT_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_RT_Press.clearEvents(); });
    }

    if (Instr_RT_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_RT_Press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_RT_Press_allKeys = _Instr_RT_Press_allKeys.concat(theseKeys);
      if (_Instr_RT_Press_allKeys.length > 0) {
        Instr_RT_Press.keys = _Instr_RT_Press_allKeys[0].name;  // just the first key pressed
        Instr_RT_Press.rt = _Instr_RT_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_RTComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_RTRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_RT'-------
    for (const thisComponent of Instr_RTComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_RT_Press.keys', Instr_RT_Press.keys);
    if (typeof Instr_RT_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_RT_Press.rt', Instr_RT_Press.rt);
        routineTimer.reset();
        }
    
    Instr_RT_Press.stop();
    // the Routine "Instr_RT" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_TR_Old_Post_Press_allKeys;
var Instr_TR_Old_PostComponents;
function Instr_TR_Old_PostRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_TR_Old_Post'-------
    t = 0;
    Instr_TR_Old_PostClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_TR_Old_Post_text.setText(instr_tr_old_post_text);
    Instr_TR_Old_Post_Press.keys = undefined;
    Instr_TR_Old_Post_Press.rt = undefined;
    _Instr_TR_Old_Post_Press_allKeys = [];
    block_type = "TR";
    stim_type = "Symb";
    remap = 0;
    block_count = 0;
    post = 1;
    symb = symb_map;
    //symb_g = symb_g_map;
    //symb_r = symb_r_map;
    
    // keep track of which components have finished
    Instr_TR_Old_PostComponents = [];
    Instr_TR_Old_PostComponents.push(Instr_TR_Old_Post_text);
    Instr_TR_Old_PostComponents.push(Instr_TR_Old_Post_Press);
    
    for (const thisComponent of Instr_TR_Old_PostComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_TR_Old_PostRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_TR_Old_Post'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_TR_Old_PostClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_TR_Old_Post_text* updates
    if (t >= 0.0 && Instr_TR_Old_Post_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_TR_Old_Post_text.tStart = t;  // (not accounting for frame time here)
      Instr_TR_Old_Post_text.frameNStart = frameN;  // exact frame index
      
      Instr_TR_Old_Post_text.setAutoDraw(true);
    }

    
    // *Instr_TR_Old_Post_Press* updates
    if (t >= 0.0 && Instr_TR_Old_Post_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_TR_Old_Post_Press.tStart = t;  // (not accounting for frame time here)
      Instr_TR_Old_Post_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_TR_Old_Post_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_TR_Old_Post_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_TR_Old_Post_Press.clearEvents(); });
    }

    if (Instr_TR_Old_Post_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_TR_Old_Post_Press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_TR_Old_Post_Press_allKeys = _Instr_TR_Old_Post_Press_allKeys.concat(theseKeys);
      if (_Instr_TR_Old_Post_Press_allKeys.length > 0) {
        Instr_TR_Old_Post_Press.keys = _Instr_TR_Old_Post_Press_allKeys[0].name;  // just the first key pressed
        Instr_TR_Old_Post_Press.rt = _Instr_TR_Old_Post_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_TR_Old_PostComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_TR_Old_PostRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_TR_Old_Post'-------
    for (const thisComponent of Instr_TR_Old_PostComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_TR_Old_Post_Press.keys', Instr_TR_Old_Post_Press.keys);
    if (typeof Instr_TR_Old_Post_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_TR_Old_Post_Press.rt', Instr_TR_Old_Post_Press.rt);
        routineTimer.reset();
        }
    
    Instr_TR_Old_Post_Press.stop();
    // the Routine "Instr_TR_Old_Post" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_CR_New_Press_allKeys;
var Instr_CR_NewComponents;
function Instr_CR_NewRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_CR_New'-------
    t = 0;
    Instr_CR_NewClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_CR_New_Text.setText(instr_cr_new_text);
    Instr_CR_New_Press.keys = undefined;
    Instr_CR_New_Press.rt = undefined;
    _Instr_CR_New_Press_allKeys = [];
    block_type = "CR";
    stim_type = "Symb";
    block_count = 0;
    remap = 1;
    
    if (grp_stop === 1) {
        symb = symb_map;
        //symb_g = symb_g_map;
        //symb_r = symb_r_map;
    } else {
        if (grp_swap === 1) {
            symb = symb_remap;
            //symb_g = symb_g_remap;
            //symb_r = symb_r_remap;
        }
    }
    
    // keep track of which components have finished
    Instr_CR_NewComponents = [];
    Instr_CR_NewComponents.push(Instr_CR_New_Text);
    Instr_CR_NewComponents.push(Instr_CR_New_Press);
    
    for (const thisComponent of Instr_CR_NewComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_CR_NewRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_CR_New'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_CR_NewClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_CR_New_Text* updates
    if (t >= 0.0 && Instr_CR_New_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_CR_New_Text.tStart = t;  // (not accounting for frame time here)
      Instr_CR_New_Text.frameNStart = frameN;  // exact frame index
      
      Instr_CR_New_Text.setAutoDraw(true);
    }

    
    // *Instr_CR_New_Press* updates
    if (t >= 0.0 && Instr_CR_New_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_CR_New_Press.tStart = t;  // (not accounting for frame time here)
      Instr_CR_New_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_CR_New_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_CR_New_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_CR_New_Press.clearEvents(); });
    }

    if (Instr_CR_New_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_CR_New_Press.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_CR_New_Press_allKeys = _Instr_CR_New_Press_allKeys.concat(theseKeys);
      if (_Instr_CR_New_Press_allKeys.length > 0) {
        Instr_CR_New_Press.keys = _Instr_CR_New_Press_allKeys[0].name;  // just the first key pressed
        Instr_CR_New_Press.rt = _Instr_CR_New_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_CR_NewComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_CR_NewRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_CR_New'-------
    for (const thisComponent of Instr_CR_NewComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_CR_New_Press.keys', Instr_CR_New_Press.keys);
    if (typeof Instr_CR_New_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_CR_New_Press.rt', Instr_CR_New_Press.rt);
        routineTimer.reset();
        }
    
    Instr_CR_New_Press.stop();
    // the Routine "Instr_CR_New" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _RT_Press_Stop_allKeys;
var RT_Enter_Trial_StopComponents;
function RT_Enter_Trial_StopRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RT_Enter_Trial_Stop'-------
    t = 0;
    RT_Enter_Trial_StopClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    RT_Rec_Frame_Stop.setOpacity(rec_frame_opacity);
    RT_Rec_Frame_Stop.setLineColor(new util.Color(rec_frame_color));
    RT_Rec_Frame_Stop.setLineWidth(rec_wd);
    //RT_Stim_Image_Stop.setImage(symb_item);
    Letter.setColor(new util.Color('white'));
    Letter.setText(symb_item);
    RT_Press_Stop.keys = undefined;
    RT_Press_Stop.rt = undefined;
    _RT_Press_Stop_allKeys = [];
    // keep track of which components have finished
    RT_Enter_Trial_StopComponents = [];
    RT_Enter_Trial_StopComponents.push(RT_Rec_Frame_Stop);
    //RT_Enter_Trial_StopComponents.push(RT_Stim_Image_Stop);
    RT_Enter_Trial_StopComponents.push(Letter);
    RT_Enter_Trial_StopComponents.push(RT_Press_Stop);
    
    for (const thisComponent of RT_Enter_Trial_StopComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function RT_Enter_Trial_StopRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RT_Enter_Trial_Stop'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RT_Enter_Trial_StopClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *RT_Rec_Frame_Stop* updates
    if (t >= 0.0 && RT_Rec_Frame_Stop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Rec_Frame_Stop.tStart = t;  // (not accounting for frame time here)
      RT_Rec_Frame_Stop.frameNStart = frameN;  // exact frame index
      
      RT_Rec_Frame_Stop.setAutoDraw(true);
    }

    frameRemains = stop_tol  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RT_Rec_Frame_Stop.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RT_Rec_Frame_Stop.setAutoDraw(false);
    }
    
    // *RT_Stim_Image_Stop* updates
    if (t >= 0.0 && Letter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Letter.tStart = t;  // (not accounting for frame time here)
      Letter.frameNStart = frameN;  // exact frame index
      
      Letter.setAutoDraw(true);
    }

    frameRemains = 0.0 + stop_tol - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Letter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Letter.setAutoDraw(false);
    }
    
    // *RT_Press_Stop* updates
    if (t >= 0.0 && RT_Press_Stop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Press_Stop.tStart = t;  // (not accounting for frame time here)
      RT_Press_Stop.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { RT_Press_Stop.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { RT_Press_Stop.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { RT_Press_Stop.clearEvents(); });
    }

    frameRemains = 0.0 + stop_tol - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RT_Press_Stop.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RT_Press_Stop.status = PsychoJS.Status.FINISHED;
  }

    if (RT_Press_Stop.status === PsychoJS.Status.STARTED) {
      let theseKeys = RT_Press_Stop.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _RT_Press_Stop_allKeys = _RT_Press_Stop_allKeys.concat(theseKeys);
      if (_RT_Press_Stop_allKeys.length > 0) {
        RT_Press_Stop.keys = _RT_Press_Stop_allKeys[0].name;  // just the first key pressed
        RT_Press_Stop.rt = _RT_Press_Stop_allKeys[0].rt;
        // was this correct?
        if (RT_Press_Stop.keys == key_item) {
            RT_Press_Stop.corr = 1;
        } else {
            RT_Press_Stop.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RT_Enter_Trial_StopComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RT_Enter_Trial_StopRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RT_Enter_Trial_Stop'-------
    for (const thisComponent of RT_Enter_Trial_StopComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    sound_vol = 0;
    if ((remap_pair_1.includes(stimnum_item)) || (remap_pair_2.includes(stimnum_item))) {
        if ((RT_Press_Stop.keys === undefined)) {
            corr = 1;
            feedback_col = color_p;
            feedback_dur = 0.3;
            sound_vol = 1;
        } else {
            corr = 0;
            feedback_col = color_n;
            feedback_dur = 1;
        }
      } else {
        if ((RT_Press_Stop.keys !== undefined)) {
          if (RT_Press_Stop.corr) {
              corr = 1;
              feedback_col = color_p;
              feedback_dur = 0.3;
              sound_vol = 1;
          } else {
              corr = 0;
              feedback_col = color_n;
              feedback_dur = 1;
          }
        } else {
            corr = 0;
            feedback_col = color_n;
            feedback_dur = 1;
        }
    }
    if ((RT_Press_Stop.keys !== undefined)) {
        actual_press = RT_Press_Stop.keys;
        rt = RT_Press_Stop.rt;
        actual_choice = key_list.indexOf(actual_press);
    } else {
        actual_press = "a";
        rt = 99;
        actual_choice = num_symb;
    }
    psychoJS.experiment.addData("actual_press", actual_press);
    psychoJS.experiment.addData("rt", rt);
    psychoJS.experiment.addData("actual_choice", actual_choice);
    psychoJS.experiment.addData("correct", corr);
    if ((block_type === "RT")) {
        trial_count = (trial_count + 1);
    }
    
    // was no response the correct answer?!
    if (RT_Press_Stop.keys === undefined) {
      if (['None','none',undefined].includes(key_item)) {
         RT_Press_Stop.corr = 1;  // correct non-response
      } else {
         RT_Press_Stop.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('RT_Press_Stop.keys', RT_Press_Stop.keys);
    psychoJS.experiment.addData('RT_Press_Stop.corr', RT_Press_Stop.corr);
    if (typeof RT_Press_Stop.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('RT_Press_Stop.rt', RT_Press_Stop.rt);
        routineTimer.reset();
        }
    
    RT_Press_Stop.stop();
    // the Routine "RT_Enter_Trial_Stop" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_TR_Old_Post_Press_3_allKeys;
var Instr_TR_NewComponents;
function Instr_TR_NewRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_TR_New'-------
    t = 0;
    Instr_TR_NewClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_TR_Old_Post_text_3.setText(instr_tr_new_text);
    Instr_TR_Old_Post_Press_3.keys = undefined;
    Instr_TR_Old_Post_Press_3.rt = undefined;
    _Instr_TR_Old_Post_Press_3_allKeys = [];
    block_type = "TR";
    stim_type = "Symb";
    remap = 1;
    block_count = 0;
    if (grp_stop === 1) {
        symb = symb_map;
        //symb_g = symb_g_map;
        //symb_r = symb_r_map;
    } else {
        if (grp_swap === 1) {
            symb = symb_remap;
            //symb_g = symb_g_remap;
            //symb_r = symb_r_remap;
        }
    }
    
    // keep track of which components have finished
    Instr_TR_NewComponents = [];
    Instr_TR_NewComponents.push(Instr_TR_Old_Post_text_3);
    Instr_TR_NewComponents.push(Instr_TR_Old_Post_Press_3);
    
    for (const thisComponent of Instr_TR_NewComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_TR_NewRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_TR_New'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_TR_NewClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_TR_Old_Post_text_3* updates
    if (t >= 0.0 && Instr_TR_Old_Post_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_TR_Old_Post_text_3.tStart = t;  // (not accounting for frame time here)
      Instr_TR_Old_Post_text_3.frameNStart = frameN;  // exact frame index
      
      Instr_TR_Old_Post_text_3.setAutoDraw(true);
    }

    
    // *Instr_TR_Old_Post_Press_3* updates
    if (t >= 0.0 && Instr_TR_Old_Post_Press_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_TR_Old_Post_Press_3.tStart = t;  // (not accounting for frame time here)
      Instr_TR_Old_Post_Press_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_TR_Old_Post_Press_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_TR_Old_Post_Press_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_TR_Old_Post_Press_3.clearEvents(); });
    }

    if (Instr_TR_Old_Post_Press_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_TR_Old_Post_Press_3.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _Instr_TR_Old_Post_Press_3_allKeys = _Instr_TR_Old_Post_Press_3_allKeys.concat(theseKeys);
      if (_Instr_TR_Old_Post_Press_3_allKeys.length > 0) {
        Instr_TR_Old_Post_Press_3.keys = _Instr_TR_Old_Post_Press_3_allKeys[0].name;  // just the first key pressed
        Instr_TR_Old_Post_Press_3.rt = _Instr_TR_Old_Post_Press_3_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_TR_NewComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_TR_NewRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_TR_New'-------
    for (const thisComponent of Instr_TR_NewComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_TR_Old_Post_Press_3.keys', Instr_TR_Old_Post_Press_3.keys);
    if (typeof Instr_TR_Old_Post_Press_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_TR_Old_Post_Press_3.rt', Instr_TR_Old_Post_Press_3.rt);
        routineTimer.reset();
        }
    
    Instr_TR_Old_Post_Press_3.stop();
    // the Routine "Instr_TR_New" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var tr_text;
var tr_sound;
var tr_good_time;
var _TR_Press_Stop_allKeys;
var TR_Enter_Trials_StopComponents;
function TR_Enter_Trials_StopRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_Enter_Trials_Stop'-------
    t = 0;
    TR_Enter_Trials_StopClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    TR_Beep_Hand = new sound.Sound({
    win: psychoJS.window,
    value: beep,
    secs: -1,
    });
    TR_Beep_Hand.setVolume(1);
    routineTimer.reset(time_limit);
    tr_text = 0;
    tr_sound = 0;
    tr_good_time = 0;
    tr_press_early = 0;
    tr_press_late = 0;
    tr_press_tooearly = 0;
    tr_press_toolate = 0;
    tr_penalty = 0;
    tr_feedback = 0;
    
    TR_Rec_Frame_Stop.setOpacity(rec_frame_opacity);
    TR_Rec_Frame_Stop.setLineColor(new util.Color(rec_frame_color));
    TR_Rec_Frame_Stop.setLineWidth(rec_wd);
    //TR_Stim_Image_Stop.setImage(symb_item);
    Letter.setColor(new util.Color('white'));
    Letter.setText(symb_item);
    TR_Press_Stop.keys = undefined;
    TR_Press_Stop.rt = undefined;
    _TR_Press_Stop_allKeys = [];
    // keep track of which components have finished
    TR_Enter_Trials_StopComponents = [];
    TR_Enter_Trials_StopComponents.push(TR_Beep_Hand);
    TR_Enter_Trials_StopComponents.push(TR_Rec_Frame_Stop);
    //TR_Enter_Trials_StopComponents.push(TR_Stim_Image_Stop);
    TR_Enter_Trials_StopComponents.push(Letter);
    TR_Enter_Trials_StopComponents.push(TR_Press_Stop);
    
    for (const thisComponent of TR_Enter_Trials_StopComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_Enter_Trials_StopRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_Enter_Trials_Stop'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TR_Enter_Trials_StopClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop TR_Beep_Stop
    if (t >= 0.0 && TR_Beep_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Beep_Hand.tStart = t;  // (not accounting for frame time here)
      TR_Beep_Hand.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ TR_Beep_Hand.play(); });  // screen flip
      TR_Beep_Hand.status = PsychoJS.Status.STARTED;
    }
    
    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t >= frameRemains && TR_Beep_Hand.status === PsychoJS.Status.STARTED) {
      //TR_Beep_Stop.stop();  // stop the sound (if longer than duration)
      TR_Beep_Hand.status = PsychoJS.Status.FINISHED;
    }
    
    // *TR_Rec_Frame_Stop* updates
    if (t >= 0.0 && TR_Rec_Frame_Stop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Rec_Frame_Stop.tStart = t;  // (not accounting for frame time here)
      TR_Rec_Frame_Stop.frameNStart = frameN;  // exact frame index
      
      TR_Rec_Frame_Stop.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Rec_Frame_Stop.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Rec_Frame_Stop.setAutoDraw(false);
    }
    
    // *TR_Stim_Image_Stop* updates
    if (t >= stim_start_time && Letter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Letter.tStart = t;  // (not accounting for frame time here)
      Letter.frameNStart = frameN;  // exact frame index
      
      Letter.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Letter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Letter.setAutoDraw(false);
    }
    
    // *TR_Press_Stop* updates
    if (t >= 0.0 && TR_Press_Stop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Press_Stop.tStart = t;  // (not accounting for frame time here)
      TR_Press_Stop.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TR_Press_Stop.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TR_Press_Stop.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TR_Press_Stop.clearEvents(); });
    }

    frameRemains = 0.0 + time_limit - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Press_Stop.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Press_Stop.status = PsychoJS.Status.FINISHED;
  }

    if (TR_Press_Stop.status === PsychoJS.Status.STARTED) {
      let theseKeys = TR_Press_Stop.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _TR_Press_Stop_allKeys = _TR_Press_Stop_allKeys.concat(theseKeys);
      if (_TR_Press_Stop_allKeys.length > 0) {
        TR_Press_Stop.keys = _TR_Press_Stop_allKeys[0].name;  // just the first key pressed
        TR_Press_Stop.rt = _TR_Press_Stop_allKeys[0].rt;
        // was this correct?
        if (TR_Press_Stop.keys == key_item) {
            TR_Press_Stop.corr = 1;
        } else {
            TR_Press_Stop.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_Enter_Trials_StopComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function TR_Enter_Trials_StopRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_Enter_Trials_Stop'-------
    for (const thisComponent of TR_Enter_Trials_StopComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    //TR_Beep_Stop.stop();  // ensure sound has stopped at end of routine
    sound_vol = 0;
    if ((remap_pair_1.includes(stimnum_item)) || (remap_pair_2.includes(stimnum_item))) {
        if ((TR_Press_Stop.keys === undefined)) {
            corr = 1;
            feedback_col = color_p;
            tr_feedback = 1;
            sound_vol = 1;
            tr_text = 0;
        } else {
            corr = 0;
            feedback_col = color_n;
            if ((TR_Press_Stop.rt < ((time_limit - 0.2) - 0.3))) {
                tr_press_tooearly = 1;
                tr_penalty = 1;
            } else {
                if ((TR_Press_Stop.rt < ((time_limit - 0.2) - timing_tol_early))) {
                    tr_press_early = 1;
                    tr_feedback = 1;
                    tr_text = 1;
                } else {
                    if ((TR_Press_Stop.rt > ((time_limit - 0.2) + timing_tol_late))) {
                        tr_press_late = 1;
                        tr_feedback = 1;
                        tr_text = 1;
                    } else {
                        tr_feedback = 1;
                        tr_text = 1;
                    }
                }
            }
        }
    } else {
        tr_text = 1;
        if ((TR_Press_Stop.keys !== undefined)) {
            if (TR_Press_Stop.corr) {
                corr = 1;
                feedback_col = color_p;
                feedback_dur = 0.3;
            } else {
                corr = 0;
                feedback_col = color_n;
                feedback_dur = 1;
            }
            if ((TR_Press_Stop.rt < ((time_limit - 0.2) - 0.3))) {
                tr_press_tooearly = 1;
                tr_penalty = 1;
            } else {
                tr_feedback = 1;
                tr_timing_good = (tr_timing_good + 1);
                if ((TR_Press_Stop.rt < ((time_limit - 0.2) - timing_tol_early))) {
                    tr_press_early = 1;
                } else {
                    if ((TR_Press_Stop.rt > ((time_limit - 0.2) + timing_tol_late))) {
                        tr_press_late = 1;
                    }
                }
            }
            if (((((corr === 1) && (tr_press_early === 0)) && (tr_press_late === 0)) && (tr_feedback === 1))) {
                sound_vol = 1;
            }
        } else {
            corr = 0;
            tr_press_late = 1;
            tr_feedback = 1;
            feedback_col = color_n;
        }
    }
    feedback_dur = 0.3;
    tr_feedback_text_color = [1, 1, 1];
    if ((tr_penalty === 1)) {
        if ((tr_press_toolate === 1)) {
            tr_penalty_text = penalty_toolate_text;
        } else {
            if ((tr_press_tooearly === 1)) {
                tr_penalty_text = penalty_tooearly_text;
            }
        }
    } else {
        if (((tr_feedback === 1) && (tr_text === 1))) {
            if ((tr_press_late === 1)) {
                tr_feedback_text = feedback_late_text;
            } else {
                if ((tr_press_early === 1)) {
                    tr_feedback_text = feedback_early_text;
                } else {
                    tr_feedback_text = feedback_good_text;
                }
            }
        } else {
            if ((tr_text === 0)) {
                tr_feedback_text_color = [(- 1), (- 1), (- 1)];
            }
        }
    }
    if ((TR_Press_Stop.keys !== undefined)) {
        actual_press = TR_Press_Stop.keys;
        rt = TR_Press_Stop.rt;
        actual_choice = key_list.indexOf(actual_press);
    } else {
        actual_press = "a";
        rt = 99;
        actual_choice = num_symb;
    }
    psychoJS.experiment.addData("actual_press", actual_press);
    psychoJS.experiment.addData("rt", rt);
    psychoJS.experiment.addData("actual_choice", actual_choice);
    psychoJS.experiment.addData("correct", corr);
    if ((trial_count < num_trials)) {
        trial_count = (trial_count + 1);
    }
    
    // was no response the correct answer?!
    if (TR_Press_Stop.keys === undefined) {
      if (['None','none',undefined].includes(key_item)) {
         TR_Press_Stop.corr = 1;  // correct non-response
      } else {
         TR_Press_Stop.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('TR_Press_Stop.keys', TR_Press_Stop.keys);
    psychoJS.experiment.addData('TR_Press_Stop.corr', TR_Press_Stop.corr);
    if (typeof TR_Press_Stop.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('TR_Press_Stop.rt', TR_Press_Stop.rt);
        }
    
    TR_Press_Stop.stop();
    // the Routine "TR_Enter_Trials_Stop" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var _Instr_End_Exp_Key_allKeys;
var Instr_End_ExpComponents;
function Instr_End_ExpRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_End_Exp'-------
    t = 0;
    Instr_End_ExpClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_End_Exp_Text.setText(instr_end_exp_text);
    Instr_End_Exp_Key.keys = undefined;
    Instr_End_Exp_Key.rt = undefined;
    _Instr_End_Exp_Key_allKeys = [];
    // keep track of which components have finished
    Instr_End_ExpComponents = [];
    Instr_End_ExpComponents.push(Instr_End_Exp_Text);
    Instr_End_ExpComponents.push(Instr_End_Exp_Key);
    
    for (const thisComponent of Instr_End_ExpComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_End_ExpRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_End_Exp'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_End_ExpClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_End_Exp_Text* updates
    if (t >= 0.0 && Instr_End_Exp_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_End_Exp_Text.tStart = t;  // (not accounting for frame time here)
      Instr_End_Exp_Text.frameNStart = frameN;  // exact frame index
      
      Instr_End_Exp_Text.setAutoDraw(true);
    }

    
    // *Instr_End_Exp_Key* updates
    if (t >= 1 && Instr_End_Exp_Key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_End_Exp_Key.tStart = t;  // (not accounting for frame time here)
      Instr_End_Exp_Key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_End_Exp_Key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_End_Exp_Key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_End_Exp_Key.clearEvents(); });
    }

    if (Instr_End_Exp_Key.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_End_Exp_Key.getKeys({keyList: ['space'], waitRelease: false});
      _Instr_End_Exp_Key_allKeys = _Instr_End_Exp_Key_allKeys.concat(theseKeys);
      if (_Instr_End_Exp_Key_allKeys.length > 0) {
        Instr_End_Exp_Key.keys = _Instr_End_Exp_Key_allKeys[0].name;  // just the first key pressed
        Instr_End_Exp_Key.rt = _Instr_End_Exp_Key_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_End_ExpComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_End_ExpRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_End_Exp'-------
    for (const thisComponent of Instr_End_ExpComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_End_Exp_Key.keys', Instr_End_Exp_Key.keys);
    if (typeof Instr_End_Exp_Key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_End_Exp_Key.rt', Instr_End_Exp_Key.rt);
        routineTimer.reset();
        }
    
    Instr_End_Exp_Key.stop();
    // the Routine "Instr_End_Exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }

  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  document.body.style.cursor='auto';

  return Scheduler.Event.QUIT;
}

// detect what browser participants are using
function detectBrowser() {    
  const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; // Opera 8.0+
  const isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
  const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)); // Safari 3.0+ "[object HTMLElementConstructor]"
  const isIE = /*@cc_on!@*/false || !!document.documentMode; // Internet Explorer 6-11
  const isEdge = !isIE && !!window.StyleMedia; // Edge 20+
  const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime); // Chrome 1 - 79
  const isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1); // Edge (based on chromium) detection
  const isBlink = (isChrome || isOpera) && !!window.CSS; // Blink engine detection

  let browser;
  if (isOpera)
    browser = 'Opera';
  else if (isFirefox)
    browser = 'Firefox';
  else if (isSafari)
    browser = 'Safari';
  else if (isIE)
    browser = 'IE';
  else if (isEdge)
    browser = 'Edge';
  else if (isChrome)
    browser = 'Chrome';
  else if (isEdgeChromium)
    browser = 'Edge Chromium';
  else if (isBlink)
    browser = 'Blink';
  else
    browser = 'Could not identify browser';
  return browser;
}

// permutation of arrays
function permute(permutation) {
  var length = permutation.length,
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}