export default function Besar(params) {
    return(
        <div class="card container-fluid accordion" id="contoh1">
            <div className="card-header bg-dark text-white mb-3">
                <h2>Hari Besar Adiwiyata</h2>
            </div>
            <div className="card-body">

                {/** accordion pertama*/}
                <div class="accordion-item">
                    <h2 class="accordion-header" id="head1">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#satu" aria-expanded="true" aria-controls="satu">
                            Hari Peduli Sampah Nasional
                        </button>
                    </h2>
                    <div id="satu" class="accordion-collapse collapse show" aria-labelledby="head1" 
                    data-bs-parent="#contoh1">
                        <div class="accordion-body">
                            <p>Diperingati Setiap Tanggal <b>21 Februari</b></p>
                        </div>
                    </div>
                </div>

                {/** accordion kedua*/}
                <div class="accordion-item">
                    <h2 class="accordion-header" id="head2">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#dua" aria-expanded="true" aria-controls="dua">
                            Hari Air se Dunia
                        </button>
                    </h2>
                    <div id="dua" class="accordion-collapse collapse show" aria-labelledby="head2" 
                    data-bs-parent="#contoh1">
                        <div class="accordion-body">
                            <p>Diperingati Setiap Tanggal <b>22 Maret</b></p>
                        </div>
                    </div>
                </div>

                {/** accordion ketiga*/}
                <div class="accordion-item">
                    <h2 class="accordion-header" id="head3">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#tiga" aria-expanded="true" aria-controls="tiga">
                            Hari Bumi
                        </button>
                    </h2>
                    <div id="tiga" class="accordion-collapse collapse show" aria-labelledby="head3" 
                    data-bs-parent="#contoh1">
                        <div class="accordion-body">
                            <p>Diperingati Setiap Tanggal <b>22 April</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}