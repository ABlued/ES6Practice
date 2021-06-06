export default function log(data) {
    console.log(data);
}

// export const getTime = () => {
//     return Date.now();
// }

export const getCurrentHour = () => {
    return (new Date).getHours();
}

/* Class */

export class myLogger {
    constructor(props){
        this.lectures = ['java', 'IOS'];
    }

    getLectures(){
        return this.lectures;
    }

    getTime() {
        return Date.now();
    }
}
