<template>
    <b-alert show variant="warning">
        <h4 class="m-0">Acara sekarang: {{acara}}</h4>
    </b-alert>
</template>

<script>
import moment from 'moment'
import 'moment-timezone/moment-timezone'
import 'moment/locale/id'
moment.locale('id')
moment.tz.load({
    "version": "2018g",
    "zones": [
        "Asia/Jakarta|LMT BMT +0720 +0730 +09 +08 WIB|-77.c -77.c -7k -7u -90 -80 -70|012343536|-49jH7.c 2hiLL.c luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6"
    ],
    "links": [

    ]
})
// moment.tz.setDefault('Asia/Jakarta')

export default {
    name: 'XTAcara',
    data: () => ({
        acara: "-"
    }),
    methods: {
        update: function(){
            /* eslint-disable no-console */
            var jamPc = moment();
            console.log("Jam PC: "+jamPc.format());
            var now = moment().tz('Asia/Jakarta');
            console.log("Jam XT: "+ now.format());
            var now_s = now.format("YYYY-MM-DD");

            var acaraBMX_min = moment(now_s+" 08:00:00 +07:00", "YYYY-MM-DD HH:mm:ss Z");
            var acaraBMX_max = moment(now_s+" 09:59:59 +07:00", "YYYY-MM-DD HH:mm:ss Z");

            var acaraLeyeh_min = moment(now_s+" 12:00:00 +07:00", "YYYY-MM-DD HH:mm:ss Z");
            var acaraLeyeh_max = moment(now_s+" 13:59:59 +07:00", "YYYY-MM-DD HH:mm:ss Z");

            var acaraKuper_min = moment(now_s+" 16:00:00 +07:00", "YYYY-MM-DD HH:mm:ss Z");
            var acaraKuper_max = moment(now_s+" 17:29:59 +07:00", "YYYY-MM-DD HH:mm:ss Z");

            var acara7PM_min = moment(now_s+" 19:00:00 +07:00", "YYYY-MM-DD HH:mm:ss Z");
            var acara7PM_max = moment(now_s+" 20:59:59 +07:00", "YYYY-MM-DD HH:mm:ss Z");

            if(now.format("d")>=1 && now.format("d")<=5)
            {
                if(now.format("H")>=8 && now.format("H")<21)
                {
                    if(now.diff(acaraBMX_min)>0 && acaraBMX_max.diff(now)>0)
                    {
                        this.acara = "BMX";
                    }
                    else if(now.diff(acaraLeyeh_min)>0 && acaraLeyeh_max.diff(now)>0)
                    {
                        this.acara = "Leyeh - Leyeh";
                    }
                    else if(now.diff(acaraKuper_min)>0 && acaraKuper_max.diff(now)>0)
                    {
                        this.acara = "Kuper Berad";
                    }
                    else if(now.diff(acara7PM_min)>0 && acara7PM_max.diff(now)>0)
                    {
                        this.acara = "7PM";
                    }
                    else
                    {
                        this.acara = "Music Time";
                    }
                }
                else
                {
                    this.acara = "-";
                }
            }
            else
            {
                this.acara = "-";
            }

            /* eslint-disable no-console */
        }
    },
    mounted(){
        this.update();
        //this.acara = "Libur sampai Januari 2019";
    }
}
</script>
