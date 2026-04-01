import fs from 'fs'
export default class DataReadAndWrite
{

    readDataFromJson(path:string)
    {
            let data = JSON.parse(fs.readFileSync(path,'utf-8'))
            return data
    }


}