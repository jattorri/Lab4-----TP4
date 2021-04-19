const controller = {};


controller.list = (req, res) =>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM empleados;', (err, empleados) =>{
            if(err){
                res.json(err)
            }
            console.log(empleados);
            res.render('empleados', {
                data: empleados
            });
        });

    });
};
controller.save =(req, res) => {
    const data = req.body;
   req.getConnection((err,conn) =>{
       conn.query('INSERT INTO empleados set ?', [data], (err, empleado)=> {
           console.log(empleado);
           res.send('Works');
       });
   })
};
controller.delete=(req,res)=>{
   const id = req.params.id
   req.getConnection((err, conn)=>{
       conn.query('DELETE FROM empleados WHERE id = ?', [id], (err, rows) =>{
           res.redirect('/');
       });
   });
}
module.exports=controller;
