function dummyTest(){
    console.log('Test are Passing');
    throw new Error("Test are failing now");
}


dummyTest();