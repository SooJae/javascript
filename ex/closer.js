let f;
{
    let o ={ note:'Safe'};
    console.log(o);
    f = function(){
        
        return 0;
    }
}

let oRef = f();
oRef.note = "Not so";

console.log(f.o);