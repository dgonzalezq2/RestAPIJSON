const express = require("express");
var cors = require("cors") //Lineas que permiten eliminar problemas de acceso con la data original
const app = express(); //Aplicación de la eliminación de la restricción inicial


const data = [{
        nombre: "Shakira",
        foto: "https://elintranews.com/wp-content/uploads/2020/11/SHAKIRA-2.jpg",
        correo: "shakira97 @gmail.com",
        telefono: "0997426891"
    }, {
        nombre: "Leonel Messi",
        foto: "https://estaticos.sport.es/resources/jpg/0/7/leo-messi-ficha-bio-utilizar-1375639723270.jpg",
        correo: "leomessi58@gmail.com",
        telefono: "0997425231"
    },
    {
        nombre: "Grant Gustin",
        foto: "https://i.pinimg.com/originals/0c/01/f6/0c01f68c319514713a8e86d76970af5a.png",
        correo: "ggustinflash@hotmail.com",
        telefono: "09897456321"
    },
    {
        nombre: "Carlos Valdez",
        foto: "https://i.pinimg.com/originals/ed/e7/72/ede7720ab2c9de25bce039bd88831ebf.jpg",
        correo: "cvaldezvibe@hotmail.com",
        telefono: "09501248975"
    },
    {
        nombre: "Danielle Panabaker",
        foto: "https://sciencefiction.com/wp-content/uploads/2019/02/The-Flash-Killer-Frost-poster-danielle-Panabaker.jpg",
        correo: "dpanabakerfrost@hotmail.com",
        telefono: "09401548978"
    },
    {
        nombre: "Prince Royce",
        foto: "https://pbs.twimg.com/profile_images/1281672145651863553/ctNCE06S_400x400.jpg",
        correo: "proyce_bachata@outlook.com",
        telefono: "09401538178"
    },
    {
        nombre: "Tom Cavanagh",
        foto: "https://i.pinimg.com/originals/87/02/39/870239fc24c271f6b464956796fcc551.jpg",
        correo: "dpanabakerfrost@hotmail.com",
        telefono: "09401548978"
    },
    {
        nombre: "Michael Jackson",
        foto: "https://i0.wp.com/www.vinilonegro.com/wp-content/uploads/2015/10/Michael-Jackson-1-e1445792155655.jpg?resize=600%2C381&ssl=1",
        correo: "mjackson5@hotmail.com",
        telefono: "0989256137"
    },
    {
        nombre: "Romeo Santos",
        foto: "https://us.hola.com/imagenes/es/celebrities/2019081927140/romeo-santos-canta-bebe/0-198-527/romeo-santos-portada-m.jpg",
        correo: "rsantos_king@hotmail.com",
        telefono: "0952184730"
    },
    {
        nombre: "Marck Rufalo",
        foto: "https://i.blogs.es/011590/normal_ruffalo/450_1000.jpg",
        correo: "mrufalo85@gmail.com",
        telefono: "08745211523"
    },
    {
        nombre: "Jefferson Pérez",
        foto: "https://i.ytimg.com/vi/fRYlSBn5raI/maxresdefault.jpg",
        correo: "jeffperez@gmail.com",
        telefono: "38246931"
    },
    {
        nombre: "José Martín Galarza Arce",
        foto: "https://robertoramasso.com/contrataciones/contratar-a-au-d.jpg",
        correo: "elaudman@gmail.com",
        telefono: "0978143025"
    },
    {
        nombre: "Mike Bahía",
        foto: "https://los40es00.epimg.net/los40/imagenes/2020/02/21/los40urban/1582299648_829106_1582300207_noticia_normal.jpg",
        correo: "mbahía@gmail.com",
        telefono: "0825143968"
    },
    {
        nombre: "Robert Downey Jr",
        foto: "https://images.clarin.com/2016/09/22/politicamente-incorrecto-el-discurso-de___SkdT03Y4l_340x340.jpg",
        correo: "riroman@gmail.com",
        telefono: "0925343962"
    },
    {
        nombre: "Tobey Maguire",
        foto: "https://pley.today/__export/1583421559199/sites/mui/img/2020/03/05/tobey-maguire-sera-spider-man-otra-vez-en-doctor-strange-2.jpg_691115875.jpg",
        correo: "tmaguire@hotmail.com",
        telefono: "0865321456"
    },
    {
        nombre: "Andrew Garfield",
        foto: "https://i.pinimg.com/originals/57/2e/f2/572ef21ef46af539cb03b9f7e7d3313b.jpg",
        correo: "agarfield@gmail.com",
        telefono: "0978152364"
    },
    {
        nombre: "Chris Evans",
        foto: "https://i.pinimg.com/originals/83/7b/b4/837bb4fce696a993e272ac1f244447f2.jpg",
        correo: "ccapitanevans@gmail.com",
        telefono: "08245987415"
    },
    {
        nombre: "Juan Fernando Velazco",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmgDY8WS_3HvZrHxkd0dX3OUWmipSlDT9fQ&usqp=CAU",
        correo: "jfvelazco97s@gmail.com",
        telefono: "0952473020"
    },
    {
        nombre: "Marco Antonio Solis",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI1pt44oHhUhp8UMdXDe9nm_z-bPkzXesHZQ&usqp=CAU",
        correo: "masolis@gmail.com",
        telefono: "08687223651"
    },
    {
        nombre: "Christian Castro",
        foto: "https://mx.hola.com/imagenes//famosos/2020090434298/cristian-castro-loco-valdes-agradecimiento/0-154-923/cristianloco-t.jpg?filter=w400&filter=ds75",
        correo: "chcastro@hotmail.com",
        telefono: "09285987405"
    }
]

app.use(cors());

app.get("/data", (request, response) => {
    response.json(data);
});

app.get("/", (request, response) => {
    response.json(data);
});

app.listen(process.env.PORT, () => {
    console.log("SERVIDOR EN ", process.env.PORT);
});