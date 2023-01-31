const form = document.querySelector('#form1');  // document.forms[0];

const getvalue = (e) => {

    e.preventDefault();

    // const arr = [{ name: '111' }, { name: '222' }, { name: '333' }];
    // const [e1, { name: nameOf2Element }, e3, e4] = arr;
    // console.log(e1);
    // console.log(nameOf2Element);
    // console.log(e3);
    // console.log(e4);

    const { elements: { fname: { value: fnameValue } } } = form;
    const { elements: { lname: { value: lnameValue } } } = form;
    console.log(fnameValue, lnameValue);


    // const fname = form.elements.fname.value;
    // const lname = form.elements.lname.value;
    // // alert(`${fname} - ${lname}`)

    // console.log(fname, lname)
};

form.onsubmit = getvalue;