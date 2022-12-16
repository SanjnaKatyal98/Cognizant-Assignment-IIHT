function display<T>(arg:T):any{
    console.log(typeof arg)
}
display("Hii")
display(4566)

function add<T,A>(arg2,arg):any{
    console.log("Add values ",arg2+arg)

}
add(4,5)
add("sanjna","katyal")