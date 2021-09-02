const words = ['Project', 'without', 'through', 'himself', 'thought', 'against', 'nothing', 'another', 'between', 'because', 'something', 'country', 'Gutenberg', 'however', 'brought', 'present', 'certain', 'themselves', 'morning', 'hundred', 'received', 'believe', 'anything', 'herself', 'already', 'together', 'perhaps', 'English', 'children', 'several', 'therefore', 'whether', 'general', 'thousand', 'looking', 'following', 'business', 'electronic', 'answered', 'friends', 'towards', 'replied', 'different', 'question', 'England', 'possible', 'returned', 'Foundation', 'beautiful', 'subject', 'followed', 'evening', 'understand', 'written', 'carried', 'account', 'necessary', 'sometimes', 'character', 'reached', 'copyright', 'appeared', 'interest', 'General', 'continued', 'strange', 'further', 'feeling', 'Footnote', 'suddenly', 'brother', 'neither', 'CHAPTER', 'everything', 'suppose', 'natural', 'entered', 'position', 'American', 'remember', 'forward', 'although', 'purpose', 'knowledge', 'receive', 'daughter', 'husband', 'certainly', 'important', 'Literary', 'service', 'probably', 'especially', 'Archive', 'greater', 'letters', 'pleasure', 'including', 'remained', 'opinion', 'various', 'history', 'agreement',
  'government', 'donations', 'persons', 'particular', 'information', 'attention', 'according', 'company', 'strength', 'gentleman', 'distance', 'beginning', 'standing', 'thinking', 'immediately', 'Captain', 'minutes', 'trouble', 'yourself', 'presence', 'learned', 'happened', 'influence', 'instead', 'condition', 'silence', 'outside', 'getting', 'whatever', 'thoughts', 'ancient', 'leaving', 'generally', 'property', 'afterwards', 'impossible', 'arrived',
  'occasion', 'married', 'writing', 'entirely', 'blockquote', 'Charles', 'covered', 'appearance', 'respect', 'expression', 'stopped', 'William', 'considerable', 'somewhat', 'PROJECT', 'greatest', 'provide', 'perfect', 'exclaimed', 'scarcely', 'Christian', 'command', 'political', 'started', 'considered', 'British', 'allowed', 'expected', 'private', 'Government', 'language', 'individual', 'opportunity', 'waiting', 'observed', 'support', 'village', 'experience', 'himself', 'reading', 'circumstances', 'discovered', 'personal', 'speaking', 'offered', 'sitting', 'efforts', 'society', 'original', 'believed', 'difficult', 'conversation', 'produced', 'officers', 'paragraph', 'supposed', 'laughed', 'intended', 'determined', 'appears', 'direction', 'terrible', 'produce', 'prepared', 'attempt', 'associated', 'turning', 'usually', 'military', 'pleased', 'quickly', 'perfectly', 'authority', 'talking', 'passing', 'afternoon', 'declared', 'passage', 'soldiers', 'required', 'picture', 'pleasant', 'permission', 'marriage', 'religious', 'Perhaps', 'beneath', 'official', 'distribute', 'justice', 'straight', 'physical', 'religion', 'understood', 'instant', 'ordered', 'success', 'matters',
  'obliged', 'fortune', 'provided', 'keeping', 'meeting', 'running', 'flowers', 'changed', "wouldnt", 'instance', 'directly', 'sufficient', 'happiness', 'journey', 'ourselves', 'conduct', 'possession', 'special', 'promise', 'situation', 'foreign', 'members', 'complete', 'passion', 'difficulty', 'courage', 'ordinary', 'concerning'
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function word_genrate() {
  return words[getRandomInt(words.length)]
}
//till here word_genrate
var data = word_genrate()
// console.log(data)
//word created
const word_to_type = document.getElementById('word_to_type')
word_to_type.innerText = data
// console.log('link');
//hard and easy
hard_status = true
easy_status = false
var step_time = 0.5;
var default_time_left = 10;
const hard_dif = () => {
  score = 0
  // default_time_left = 5
  step_time = 0.5;
}
const easy_dif = () => {
  score = 0
  // default_time_left = 10
  step_time = 1;
}
var click_hard = document.getElementById('div1_hard')
var click_easy = document.getElementById('div1_easy')
click_easy.addEventListener('click', () => {
  if (easy_status == false) {
    easy_dif()
    score_val.innerText = 0
    click_easy.style.color = '#45cc00'
    click_easy.style.background = '#0d1b2ed6';
    click_hard.style.background = '#0D1B2E';
    click_hard.style.color = 'white'
    console.log('click1')
    easy_status = true
    hard_status = false
    bar_timer.style.width = '100%'
    bar_timer.style.background = 'green'
    bar_timer_outer.style.borderColor = 'green'
    document.getElementById('answer').value = ''
    // time_left.innerText = default_time_left
  }
})
click_hard.addEventListener('click', () => {
  if (hard_status == false) {
    hard_dif()
    score_val.innerText = 0
    click_easy.style.color = 'white'
    click_hard.style.color = '#45cc00'
    click_hard.style.background = '#0d1b2ed6';
    click_easy.style.background = '#0D1B2E';
    hard_status = true
    easy_status = false
    bar_timer.style.width = '100%'
    bar_timer.style.background = 'green'
    bar_timer_outer.style.borderColor = 'green'
    console.log('click2')
    document.getElementById('answer').value = ''
  }
})
const bar_timer = document.getElementById('bar_div2')
const bar_timer_outer = document.getElementById('bar_div1')
// const time_left = document.getElementById('time_left');


//timer start
var speed = 1000;
var myTimeLoop;
var taskstop = 0;
var time_remaining
var width = 100
var timer = () => {
  time_remaining = 10
  // console.log(default_time_left)
  taskstop = 0;
  width = 100
  var myTimeLoop = setInterval(function() {
    time_remaining -= .1
    // console.log(time_remaining)
    width -= 1
    // bar_timer.style.width = width + '%'
    if (time_remaining > 6.5) {
      bar_timer.style.width = width + '%'
      bar_timer.style.background = 'green'
      bar_timer_outer.style.borderColor = 'green'

    } else if (time_remaining < 6.5 && time_remaining > 3.5) {
      console.log('yellow')
      bar_timer.style.background = 'yellow'
      bar_timer_outer.style.borderColor = 'yellow'
      bar_timer.style.width = width + '%'
    } else {
      bar_timer.style.background = 'red'
      bar_timer_outer.style.borderColor = 'red'
      bar_timer.style.width = width + '%'
    }
    if (time_remaining <= taskstop) {
      clearTimeout(myTimeLoop)
      //not effective
      if (taskstop != 0) {
        bar_timer.style.background = 'green'
        bar_timer_outer.style.borderColor = 'green'
        bar_timer.style.width = '100%'
        // document.getElementById('time_left').innerText = default_time_left
        return
      }
    }
  }, parseInt(100 * step_time));
}

//answertype and enter hit
var running = false;
const answer = document.getElementById('answer')
answer.addEventListener('keydown', (event) => {
  if (event.keyCode == 13) {
    submit()
    // clearTimeout(myvar);
  } else {
    if (running == false) {
      running = true;
      // console.log(running)
      timer()
      // console.log('timer start')
    }
  }
})
const correctness = document.getElementById('correctness-answer')
//match solution
function check_solution(data, ans) {
  if (ans == data) {
    correctness.innerText = 'Right'
    correctness.style.color = 'green'
    return true
  }
  correctness.innerText = 'Wrong'
  correctness.style.color = 'red'
  return false
}
//update_score
const score_val = document.getElementById('score')

function update_score(score) {
  score_val.innerText = score
}

var temp_score = 0
var score = 0;

//submit_hit
const submit = function() {
  running = false
  temp_score = parseInt(time_remaining * step_time) + 1
  taskstop = time_remaining
  var let_match = document.getElementById('answer').value
  if (check_solution(data, let_match)) {
    score += temp_score
    update_score(score)
  } else {
    score -= 2
    update_score(score)
  }
  //not effective
  bar_timer.style.background = 'green'
  bar_timer_outer.style.borderColor = 'green'
  bar_timer.style.width = '100%'
  console.log(score)
  document.getElementById('answer').value = ''
  data = word_genrate()
  word_to_type.innerText = data
}
