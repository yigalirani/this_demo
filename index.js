function foo(a,b){
  console.log(`foo a=${a},b=${b}`)
}
foo('a','b')
function foo2(b){
  foo('fixed a',b)
}
foo2('b')
class Foo{
  constructor(prefix) {
    this.prefix = prefix;
  }
  print_hello(name){
    console.log(this.prefix,name)
  }
}
var the_foo=new Foo('hello')
the_foo.print_hello('ofer')
function call_cb(cb){
  cb('kfir')
}
call_cb(the_foo.print_hello.bind(the_foo))