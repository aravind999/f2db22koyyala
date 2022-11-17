var Boxing = require('../models/Boxing');
// List of all Boxings
exports.Boxing_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Boxing list');
};
// List of all Boxing
exports.Boxing_list = async function(req, res) {
    try{
    theBoxings = await Boxing.find();
    res.send(theBoxings);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// for a specific Boxing.
exports.Boxing_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Boxing detail: ' + req.params.id);
};
// List of all Boxing
exports.Boxing_detail = async function(req, res) {
    try{
    theBoxings = await Boxing.find();
    res.send(theBoxings);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle Boxing create on POST.
exports.Boxing_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Boxing create POST');
};
// List of all Boxing
exports.Boxing_create_post = async function(req, res) {
    try{
    theBoxings = await Boxing.find();
    res.send(theBoxings);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle Boxing delete form on DELETE.
exports.Boxing_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Boxing delete DELETE ' + req.params.id);
};
// List of all Boxing
exports.Boxing_delete = async function(req, res) {
    try{
    theBoxings = await Boxing.find();
    res.send(theBoxings);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// Handle Boxing update form on PUT.
exports.Boxing_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Boxing update PUT' + req.params.id);
};
// List of all Boxing
exports.Boxing_create_put = async function(req, res) {
    try{
    theBoxings = await Boxing.find();
    res.send(theBoxings);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// Handle a show all view
exports.Boxing_view_all_Page = async function(req, res) {
    try{
    theBoxings = await Boxing.find();
    res.render('Boxings', { title: 'Boxing Search Results', results: theBoxings });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Boxing on POST. 
exports.Boxing_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Boxing(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Boxing_type":"goat", "cost":12, "size":"large"} 
    document.BoxingStyle = req.body.BoxingStyle; 
    document.GlovesSize = req.body.GlovesSize; 
    document.BoxingGlovesCost = req.body.BoxingGlovesCost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// for a specific Boxing. 
exports.Boxing_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Boxing.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// Handle Boxing update form on PUT. 
exports.Boxing_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Boxing.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.BoxingStyle)  
               toUpdate.BoxingStyle = req.body.BoxingStyle; 
        if(req.body.BoxingGlovesCost) toUpdate.BoxingGlovesCost = req.body.BoxingGlovesCost; 
        if(req.body.GlovesSize) toUpdate.GlovesSize = req.body.GlovesSize; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
 // Handle Boxing delete on DELETE. 
exports.Boxing_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Boxing.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 // Handle a show one view with id specified by query 
exports.Boxing_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Boxing.findById( req.query.id) 
        res.render('Boxingdetail',  
{ title: 'Boxing Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a Boxing. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Boxing_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Boxingcreate', { title: 'Boxing Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a Boxing. 
// query provides the id 
exports.Boxing_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Boxing.findById(req.query.id) 
        res.render('Boxingupdate', { title: 'Boxing Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.Boxing_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Boxing.findById(req.query.id) 
        res.render('Boxingdelete', { title: 'Boxing Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 