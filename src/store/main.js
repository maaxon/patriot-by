import {makeAutoObservable} from "mobx";
import img1 from './img1.jpg'
import Bogration from "../Data/bograt/Bogration";
import Ooh from "../Data/ooh/ooh";
import Unesko from "../Data/unesko/unesko";
import Azot from "../Data/azot/azot";
import Belaz from "../Data/belaz/belaz";
import Kall from "../Data/kall/kall";
import Avaria from "../Data/avaria/avaria";
import Futbol from "../Data/futbol/futbol";
import Tvorog from "../Data/tvorog/tvorog";
import Pvt from "../Data/pvt/pvt";
import Aes from "../Data/aes/aes";
import Bob from "../Data/bob/bob";
import Maz from "../Data/maz/maz";
import Gays from "../Data/gays/gays";
import Ff from "../Data/f/f";
import Fuk  from "../Data/fuk/fuk"
class Main{


    category= "voenie"

    data={
        voenie:
            [
                {id:1,img:"https://www.sb.by/upload/resize_cache/slam.image/iblock/900/855_2000_1/90076dc66dcc2fd3ac349c689cd9ae84.jpg",title:'Воссоединение Западной Беларуси и БССР',desc:'',component:Ff},
                {id:2,img:img1,title:'Операция "Багратион"',desc:'75 лет назад, 23 июня 1944 года, Красная армия в ходе Великой Отечественной войны начала одну из крупнейших в истории наступательных операций - по освобождению Белоруссии. Операция получила название в честь русского полководца Петра Багратиона.',component:Bogration},
            ],
        prepria:
            [
                {id:4,img:"data:image/png;base64,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",title:'МАЗ',desc:'ОАО «Минский автомобильный завод» (МАЗ) —  — советская и белорусская автомобилестроительная компания, специализирующаяся на выпуске большегрузной автомобильной, а также автобусной, троллейбусной и прицепной техники.',component: Maz},
                {id:5,img:"https://atlantconsult.com/upload/resize_cache/iblock/0d3/350_200_1/belaz_logo.png",title:'БелАЗ',desc:'Белорусский автомобильный завод (БелАЗ; белор. Беларускі аўтамабільны завод) — компания по производству карьерной техники, расположенная в Беларуси',component:Belaz},
                {id:7,img:"https://www.belta.by/images/storage/news/with_archive/2018/000021_1520443213_293245_big.jpg",title:'Беларуськалий',desc:'«Беларуськалий» является одним из крупнейших производителей и экспортеров калийных удобрений в мире.',component:Kall},
                {id:8,img:"https://export.by/images/uploads/2017/04/17/thumb/1000_230/49562-1492417889.jpg",title:'Гродно Азот',desc:'«Гродно Азот» (белор. «Гро́дна Азо́т») — открытое акционерное общество, белорусская государственная компания, производитель азотных соединений и удобрений. Основан в 1963 году как завод азотных удобрений.',component:Azot},
                {id:14,img:"https://yt3.ggpht.com/ytc/AKedOLQ2oypx_xeOH3ArYGtydJuGdw8WB7xfAiliUMqbbQ=s900-c-k-c0x00ffffff-no-rj",title:'Национальная библиотека Республики Беларусь',desc:'Национальная библиотека Беларуси  — главная универсальная научная библиотека Беларуси.',component: Bob},
                {id:15,img:"https://p-i.by/wp-content/uploads/2019/10/HTP-PI-.png",title:'ПВТ',desc:'22 сентября 2005 года Президент Республики Беларусь подписал Декрет № 12 «О Парке высоких технологий»',component: Pvt},
                {id:17,img:"https://yt3.ggpht.com/ytc/AAUvwnjPJN2Y48khsDKl5T3bG1JgaX2ghHXC9zQ8xg_V=s900-c-k-c0x00ffffff-no-rj",title:'Белорусская АЭС',desc:'Белорусская АЭС— первая атомная электростанция в Белоруссии, типа АЭС-2006. Расположена у северо-западной границы Белоруссии, в треугольнике между агрогородками Ворняны, Гервяты и Михалишки, в 18 километрах от города Островец Гродненской области, в 40 км от столицы Литвы — Вильнюса.',component: Aes},

            ],
        lichnosti:
            [
                {id:9,img:"https://cs11.livemaster.ru/storage/topicavatar/600x450/cc/d0/15fc4c0eef057d330cecb75df0c1f9963e4d6c.jpg?h=iaVHseSW-Phi48UIn3jnLw",title:'Белорусские космонавты',desc:'Владимир Ковалёнок и Петр Климук - первые белорусские космонавты',component:Futbol},
                {id:18,img:"https://static.tildacdn.com/tild3665-6230-4563-b934-386561323437/-----2.jpg",title:'Герои Беларуси',desc:'Звание Герой Беларуси — это высшая степень отличия и награда нашей страны.',component: Gays},
                {id:20,img:"https://s0.rbk.ru/v6_top_pics/media/img/7/07/756022493894077.jpg",title:'Александр Григорьевич Лукашенко',desc:'Александр Григорьевич Лукашенко - первый Президент Республики Беларусь. Его называют "политиком от народа", "самым народным Президентом", "Батькой".',component: Fuk},
            ],
        politsobit:
            [
                {id:3,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/250px-Flag_of_the_United_Nations.svg.png",title:'ООН и Беларусь',desc:'Беларусь является учредителем Организации Объединенных наций',component:Ooh},
                {id:6,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_UNESCO.svg/1200px-Flag_of_UNESCO.svg.png",title:'Всемирное наследие ЮНЕСКО в Беларуси',desc:'Беларусь вошла в состав ЮНЕСКО в 1954 году и на протяжении многих лет поддерживает с этой международной организацией плодотворные, динамичные отношения.',component:Unesko},
                {id:13,img:"https://novostipmr.com/sites/default/files/filefield_paths/evrazes.jpg",title:'Договор об учреждении Евразийского экономического сообщества',desc:'',component:Ass},
                {id:16,img:"https://lori.kz/wp-content/uploads/2019/06/1230.jpg",title:'Таможенный союз ',desc:'Таможенный союз России, Беларуси и Казахстана, единая таможенная территория, созданная на основе межгосударственных соглашений между Россией, Белоруссией и Казахстаном.',component: Tvorog},
            ],
        chaes:
            [
                {id:10,img:"https://avatars.mds.yandex.net/get-zen_doc/162989/pub_5c0909f723ea6500adc5ab17_5c0909fd03a3d000aca22239/scale_2400",title:'Авария на ЧАЭС',desc:'Двадцать шестого апреля 1986 года на чернобыльской атомной электростанции произошел взрыв',component:Avaria},
            ]
        }

    constructor() {
        makeAutoObservable(this)
    }

    getData(id){
        return this.data[this.category].find((item)=>item.id === id).component
    }

    setCategory(category) {
        this.category = category
    }


}

export default new Main();

