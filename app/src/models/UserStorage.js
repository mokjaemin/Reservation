"use strict"

// 데이터 저장소

class UserStorage{
    static #users = {
        id : ["bamer", "beamer"],
        pw : ["1234", "1021"],
        name : ["목재민", "목주형"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };


    // parameter로 받은 id와 관련된 정보 반환.
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // id, pw, name 들어감.
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
};

module.exports = UserStorage;