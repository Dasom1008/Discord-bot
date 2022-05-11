const Discord = require('discord.js');      //discord.js 라이브러리 호출
const client = new Discord.Client({ intents: ['GUILDS','GUILD_MESSAGES']});        //Client 객체생성
const token = require("./token.json");
const member = new Discord.GuildMember();

// discord 봇이 실행될 때 딱 한 번 실행할 코드를 적는 부분
client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

client.on('message', msg => {

    
    try { 
    // !ping 
        //if (msg.content === '!ping') msg.channel.send(`pong!`); // 채팅에서 메세지가 들어왔을 때 실행할 콜백함수입니다.

        //if (msg.content === '!avatar') msg.channel.send(msg.author.displayAvatarURL()); // 메세지를 보낸 유저의 프로필 사진을 받아옵니다.
        
    //    if(msg.content === '!help') {

    //         // 저희는 MessageEmbed 생성자로 embed를 생성할 수 있습니다.
    //         const embed = new Discord.MessageEmbed()
    //         .setTitle("🙋🏻‍♀️ 이것은 test bot입니다!")                        // 1 - embed의 제목을 담당합니다.
    //         .setColor('#7289da')                                        // 2 - embed 사이드 바의 색을 정합니다.
    //         .setDescription('안녕하세요! 이곳은 추후에 설명할 공간입니다.'); // 3 - 실제로 설명을 담당하는 곳입니다.
    //         console.log(embed);

    //         msg.reply({ embeds : [embed] })
    //     }
        // if(msg.content === '!name'){
        //     const nick = msg.author.name;

        //     console.log("nickname:" + nick);
        //     const embed2 = new Discord.MessageEmbed()
        //     .setTitle("당신의 이름은"+ nick+"입니다.");
            
        //     msg.reply({ embeds : [embed2] })
        // }
        // if(msg.content === '!test'){

        //     console.log("username : "+ msg.author.name);
        //     console.log(msg.author);

        //     msg.reply("test중입니다.");
        // }

        if(msg.content.substring(0,5) === '!파티모집'){

            // !파티모집 발하가실뿐 구합니당
            const description = msg.content.substring(5)

            const recruitment = new Discord.MessageEmbed()
            .setTitle("📌파티모집 ")
            .setDescription(description)
            .setColor("RED")

            msg.reply({ embeds : [recruitment] })

            .then((msg2) => {
                msg2.react("⭐")
            }) 

        }

        //console.log(msg.author); 사용자 정보가 발생합니다.
    }catch (e) {
        console.log(e);
    }
    
    });

// 봇과 서버를 연결해주는 부분
client.login(token.token);