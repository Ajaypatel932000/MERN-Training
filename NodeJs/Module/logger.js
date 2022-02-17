var url="https://test.com";
function log(message)
{
    //send HTTP request
    console.log(message);
}
function sayHello(mes)
{
    console.log("Hello :"+mes);
}

module.exports.mylog=log;
module.exports.greet=sayHello;