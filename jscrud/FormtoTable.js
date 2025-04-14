console.log("hello javascript");

// get display

let data = JSON.parse(localStorage.getItem("update")) || [];

idx = -1;

const datasubmit = () => {
    const naame = document.getElementById("name").value;
    const eml = document.getElementById("email").value;
    const agee = document.getElementById("age").value;
    const num = document.getElementById("number").value;

    let tdata = { name: naame, emaill: eml, age: agee, number: num };
    
    // edit data        
 
    if (                                                    
        idx === -1
    ) {
        data.push(tdata);
    }
    else {
        let formdata = data.map((item, index) => {
            if (index === idx) {
                return tdata;
            }
            else return item
        })
        data = formdata
    }

    // stor in localStorage   

    localStorage.setItem("update", JSON.stringify(data));
    tebledata();
    // conct table data^
};

// print table 

const tebledata = () => {
    document.getElementById("tbody").innerHTML = data?.map((item, index) => {
        return (
            `
        <tr>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.age}</td>
        <td>${item.number}</td>
         <td><button onclick="remove(${index})">Remove</button></td>
        <td><button onclick="edit(${index})">edit</button></td>
        <tr>
        `
        )
    })
        .join("");
};

// refresh 
tebledata();

// remove data

const remove = (index) => {
    let deletdata = data.filter((item, indexx) => { return (indexx !== index) });
    data = deletdata;
    localStorage.setItem("update", JSON.stringify(data));
    tebledata();
};

// edit data

const edit = (indexx) => {
    idx = indexx
    let add = data?.find((item, index) => index === indexx);
    document.getElementById("name").value = add.name;
    document.getElementById("email").value = add.email;
    document.getElementById("age").value = add.age;
    document.getElementById("number").value = add.number;
};

// sort data

const datasort = () => {
    let sorted = data.sort((item, index) => { return (item.name > index.name ? 1 : -1) });
    data = sorted;
    tebledata();
};

// searh data

const datasearch = () => {
    let searched = document.getElementById("search").value;
    let search = data.filter((item, index) => { return (item.name === searched) });
    data = search;
    tebledata();

};

