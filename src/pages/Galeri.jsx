export default function Galeri(){
    return(
        <div className="container-fluid card mt-1">
            <div className="card-header bg-dark text-white">
                <h2>Galeri Kegiatan Adiwiyata</h2>
            </div>
            <div className="card-body">
                <div className="row m-2 py-2" style={{border: `2px solid lightgrey`}}>
                    <div className="col-lg-4">
                        <img 
                        src="https://smabmone.sch.id/wp-content/uploads/2018/12/sekolahadiwiyata-sman1babakanmadang-smabmone.jpg"/>
                    </div>
                    <div className="col-lg-4">
                        <img 
                        src="http://assets.kompasiana.com/items/album/2018/03/23/foto-susiyana-mpd-5ab4db2bdd0fa80943222ad2.jpg"/>
                    </div>
                    <div className="col-lg-4">
                        <img 
                        src="http://prabumulihpos.co.id/wp-content/uploads/2019/08/3-Adi-net.jpg"/>
                    </div>
                </div>
                <div className="row m-2 py-2" style={{border: `2px solid lightgrey`}}>
                    <div className="col-lg-4">
                        <img 
                        src="https://smator.files.wordpress.com/2011/11/sekolah-adiwiyata-membentuk-pribadi-cinta-lingkungan2.jpg"/>
                    </div>
                    <div className="col-lg-4">
                        <img 
                        src="http://smkn12malang.sch.id/in/wp-content/uploads/2019/02/IMG-20190207-WA0004-820x480.jpg"/>
                    </div>
                    <div className="col-lg-4">
                        <img 
                        src="http://www.smkn1trenggalek.net/wp-content/uploads/2017/02/sabtu-bersih.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}