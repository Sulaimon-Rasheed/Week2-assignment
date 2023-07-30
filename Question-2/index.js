const path = require("path");
const fs = require("fs");

// (1) ----------Creating the folder, "Students"------------------
fs.mkdir('Students', (err)=>{
    if(err){
        console.log(err)
    }
    console.log('Folder successfully created')
})

// (2) $ (4)-----Creating the file, "user.js"--------------------
// const filepath = path.join(__dirname, 'Students', 'user.js');
// const content = "Sulaimon";
// fs.writeFile(filepath, content, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File successfully created");
// });

// (3)------------Renaming the Students directory as "Names"------------------------
// const filepath = path.join(__dirname, "Students");
// fs.rename(filepath, "Names", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Folder renamed successfully");
// });


// (5)---------------Updating the file content--------------------
// const filepath = path.join(__dirname, "Names", "user.js");
// const update = [
//   {
//     age: 41,
//     sex: "Male",
//     nationality: "Nigeria",
//     phoneNumber: "08181699389",
//     profession: "software developement",
//   },
// ];

// fs.appendFile(filepath, JSON.stringify(update), (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file content successfully updated");
// });

// (6)--------- To rename the user.js file as "sulaimon_rasheed"-----------
// const filepath = path.join(__dirname, "Names", "user.js");
// fs.rename(filepath, './Names/sulaimon_rasheed', (err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('file successfully renamed')
// })

// (7)-------------To read the content of the file-------------------------
// const filepath = path.join(__dirname, "Names", "sulaimon_rasheed");
// fs.readFile(filepath, 'utf8', (err,content)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(content)
// })

// (8)-----------To delete the file, "sulaimon_rasheed"-----------------------
// const filepath = path.join(__dirname, "Names", "sulaimon_rasheed");
// fs.unlink(filepath, (err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("file deleted successfully")
// })

// (9)--------To delete the folder, "Names"----------------
// const filepath = path.join(__dirname, "Names");
// fs.rmdir(filepath, (err)=>{
//     if(err){
//         console,log(err)
//     }
//     console.log('folder successfully deleted')
// })
