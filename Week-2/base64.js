// uses 64 characters (A-Z ; a-z ; 0-9 ; + ; /) 

const uint8Array = new Uint8Array([72,101,108,108,111]) ; // Hello
const base64Encoded =  Buffer.from(uint8Array).toString("base64") ;
console.log(base64Encoded);

// Buffer is used to handle binary data


