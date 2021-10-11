function randomNumber(x,y)
{
  let diff = Math.abs(x-y);
  let min = Math.min(x,y);
  let r = Math.random()*(diff)+min;

  console.log(r);
}

randomNumber(2,6);


function reverseStr(str)
{

  let answer = str.split('');
  answer = answer.reverse('');
  answer = answer.join('');

  console.log(answer);
}


reverseStr('vaibhav is home')


function reverseStrByWords(str)
{
  let answer = str.split(' ');
  answer = answer.reverse();
  answer = answer.join(' ');

  console.log(answer);
}

reverseStrByWords('vaibhav is home')

function reverseInt(x)
{
  let i = 0;
  let sum = 0;
  while(x>=1)
  {
    i = x%10;
    x = Math.floor(x/10);
    sum = sum*10 + i; 
  }
  console.log(sum)
}

reverseInt(123);


function replaceWords(str)
{
  let answer = str.replace(/ /g,'_');
  console.log(answer);
}

replaceWords('vaibhav is working');