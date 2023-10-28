export default function handler(req: any, res: any) {
    console.log(req.method);
     <h1>Hello</h1>
    if(req.method ==='GET'){
        res.status(200).json({message: "Hello"});
    }else {
        res.status(200).json({message: "Method not allowed"});
    }
}