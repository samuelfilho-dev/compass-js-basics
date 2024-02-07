const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
}

// 1ª Forma
for (let key in circle) {
    console.log(key, circle[key]);
}

// 2ª Forma - Chaves do Obj
for (let key of Object.keys(circle)) {
    console.log(key);
}

// 3ª Forma - Valores do Obj
for (let entry of Object.entries(circle)) {
    console.log(entry);
}

// 4ª Forma
if ('radius' in circle) console.log('yes');