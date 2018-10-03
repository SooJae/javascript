var iterable = {1:3, 2:5,3: 7};
iterable.foo = "hello";

for (var key in iterable) {
  console.log(key); // 0, 1, 2, "foo", "arrCustom", "objCustom"
}
