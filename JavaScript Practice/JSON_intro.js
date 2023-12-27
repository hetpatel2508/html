let myjson =` {
    "name" : "Het Patel",
    "e_num" : 30273,
    "isTopper" : true,
    "Backlog_History" : null,
    "skills" : ["html", "css" , "js", "c++", "pyton", "java"],
    "about" : {
        "f_name" : "Patel",
        "l_name" : "Het",
        "rank"   : 42,
        "hobbies" : ["vallyball" , "PC_games" ,  "Listing_music" , {"coding" : "c++", "fav_lang" : "python"} ] 
    }
}`;


let Info_container = JSON.parse(myjson);

console.log(Info_container["name"]); //output:  Het Patel

console.log(Info_container["e_num"]); //output: 30273

console.log(Info_container["isTopper"]); //output: true

console.log(Info_container["Backlog_History"]); //output: null



//  Array Access:
console.log(Info_container["skills"][0]); //output: html
console.log(Info_container["skills"][1]); //output: css
console.log(Info_container["skills"][2]); //output: js
console.log(Info_container["skills"][3]); //output: c++
console.log(Info_container["skills"][4]); //output: pyton
console.log(Info_container["skills"][5]); //output: java


//  Object Access:
console.log(Info_container["about"]["f_name"]); //output: Patel
console.log(Info_container["about"]["l_name"]); //output: Het
console.log(Info_container["about"]["rank"]); //output: 42


//  Array Access in Object:
console.log(Info_container["about"]["hobbies"][0]); //output: vallyball
console.log(Info_container["about"]["hobbies"][1]); //output: PC_games
console.log(Info_container["about"]["hobbies"][2]); //output: Listing_music

//  Object access in array of object: 
//or
//  Access of nested object:
console.log(Info_container["about"]["hobbies"][3]["coding"]); //output: c++
console.log(Info_container["about"]["hobbies"][3]["fav_lang"]); //output: python