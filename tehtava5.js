function kaanna()
{
  var lang = document.getElementById('kieli').value;
  if (lang == 'eng')
  {
    document.write("Hello World!");
  }
  else if (lang == 'swe')
  {
  document.write('Hej Världen');
  }
  else{
    document.write('Hola Mundo!');
  }
}
