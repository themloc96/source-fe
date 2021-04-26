//Input search focus
var seachinput = document.getElementById('search-ip');
var seachkey = document.getElementsByClassName('key')[0];
var seachclosetxt = document.getElementsByClassName('closetxt')[0];
seachinput.addEventListener('focus', function () {
  seachkey.style.display = 'none';
  seachclosetxt.style.display = 'block';
  document.querySelector('.search-dropdown').classList.add('active');
  document.querySelector('.search-form').classList.add('active');
});
seachinput.addEventListener('focusout', function () {
  seachkey.style.display = 'block';
  seachclosetxt.style.display = 'none';
  document.querySelector('.search-dropdown').classList.remove('active');
  document.querySelector('.search-form').classList.remove('active');
});