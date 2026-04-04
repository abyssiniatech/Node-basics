const fs=require('fs').promises;
async function Delete() {
    try{
  await fs.unlink('del.txt',)
    }
    catch(err){
        console.log(err);
        
    }
}
Delete()