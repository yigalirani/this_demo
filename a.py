class Foo:
  def __init__(self,prefix):
    self.prefix=prefix

  def print_hello(self,name):
    print(self.prefix,name)

foo=Foo('hello')
foo.print_hello('ofer')