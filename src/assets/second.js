export const default2 =

  [
    {
      "id": "_meta",
      "name": "追忆全家桶全角色版",
      "author": "往世的华章 & 𝓢𝓷𝓸𝔀",
      "logo": "https://i.postimg.cc/52zdkhYN/a6db4b1ab3e8a1c9454f000dcd170ee3.jpg",
      "state": [
        {
          "stateName": "𝓢𝓷𝓸𝔀の烧瓶",
          "stateDescription": "https://www.bloodstar.xyz/p/Satiny_Snow_Sweetheart/Satiny_Snow_Bottle_Experiment/almanac.html"
        }
      ]
    },
    {
      "ability": "每个夜晚，你要选择除你以外的一名玩家：明天白天，他的投票算作三票。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/bureaucrat.png",
      "edition": "custom",
      "flavor": "",
      "id": "bureaucratbutton",
      "firstNightReminder": "官员指向一名玩家。将三票标记放在那名玩家旁。",
      "otherNightReminder": "官员指向一名玩家。将三票标记放在那名玩家旁。",
      "name": "官员",
      "otherNight": 1,
      "setup": 0,
      "reminders": [
        "3票"
      ],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 1
    },
    {
      "ability": "每个白天，当首次投票被统计后，你可以选择一名刚投过票的玩家：他死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/gunslinger.png",
      "edition": "custom",
      "flavor": "",
      "id": "gunslingerbutton",
      "firstNightReminder": "",
      "otherNightReminder": "",
      "name": "枪手",
      "otherNight": 0,
      "setup": 0,
      "reminders": [
        "死亡"
      ],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 0
    },
    {
      "id": "high_priestess",
      "image": "https://clocktower-wiki.gstonegames.com/images/thumb/8/86/Highpriestess.png/240px-Highpriestess.png",
      "name": "女祭司",
      "firstNight": 48.5,
      "firstNightReminder": "唤醒女祭司。指向一名玩家。随后让女祭司重新入睡。",
      "otherNight": 68.5,
      "otherNightReminder": "唤醒女祭司。指向一名玩家。随后让女祭司重新入睡。",
      "team": "townsfolk",
      "ability": "每个夜晚，你会得知一名说书人认为你最应该与其交流的玩家。"
    },
    {
      "id": "knight",
      "image": "https://clocktower-wiki.gstonegames.com/images/thumb/6/6b/Knight.png/240px-Knight.png",
      "name": "骑士",
      "firstNight": 42.6,
      "firstNightReminder": "唤醒骑士，并指向标记有“得知”的两名玩家。让骑士重新入睡。",
      "reminders": ["得知"],
      "team": "townsfolk",
      "ability": "在你的首个夜晚，你会得知两名非恶魔玩家。"
    },
    {
      "id": "steward",
      "image": "https://clocktower-wiki.gstonegames.com/images/thumb/e/ee/Steward.png/240px-Steward.png",
      "name": "事务官",
      "firstNight": 42.3,
      "firstNightReminder": "唤醒事务官，并指向标记有“得知”的那名玩家。让事务官重新入睡。",
      "reminders": ["得知"],
      "team": "townsfolk",
      "ability": "在你的首个夜晚，你会得知一名善良玩家。"
    },
    {
      "id": "plague_doctor",
      "image": "https://clocktower-wiki.gstonegames.com/images/thumb/2/2d/Plaguedoctor.png/240px-Plaguedoctor.png",
      "name": "瘟疫医生",
      "reminders": ["说书人能力"],
      "team": "outsider",
      "ability": "如果你死亡，说书人获得一个不在场的爪牙能力。"
    },
    {
      "id": "organ_grinder",
      "image": "https://clocktower-wiki.gstonegames.com/images/thumb/f/ff/Organgrinder.png/240px-Organgrinder.png",
      "name": "街头风琴手",
      "reminders": ["即将被处决"],
      "team": "minion",
      "ability": "所有玩家在投票时闭眼，且票数会秘密统计。对你的提名只在你投票时才会统计票数。"
    },
    {
      "id": "vizier",
      "image": "https://clocktower-wiki.gstonegames.com/images/thumb/0/09/Vizier.png/240px-Vizier.png",
      "name": "维齐尔",
      "team": "minion",
      "ability": "所有玩家都知道你是维齐尔。你在白天时不会死亡。如果一次提名中有善良玩家投票，你可以让被提名者立即被处决。"
    },
    {
      "id": "harpy",
      "image": "https://clocktower-wiki.gstonegames.com/images/thumb/1/1b/Harpy.png/240px-Harpy.png",
      "name": "鹰身女妖",
      "firstNight": 26.5,
      "firstNightReminder": "让鹰身女妖指向一名玩家，再指向另一名玩家。用“疯狂”提示标记标记第一名玩家，并用“第二名”提示标记标记第二名玩家。让鹰身女妖重新入睡。唤醒标记了“疯狂”的玩家。对他展示“该角色的能力对你生效”信息标记，以及鹰身女妖的角色标记。然后指向标记了“第二名”的玩家。让这名玩家重新入睡。",
      "otherNight": 18.5,
      "otherNightReminder": "让鹰身女妖指向一名玩家，再指向另一名玩家。用“疯狂”提示标记标记第一名玩家，并用“第二名”提示标记标记第二名玩家。让鹰身女妖重新入睡。唤醒标记了“疯狂”的玩家。对他展示“该角色的能力对你生效”信息标记，以及鹰身女妖的角色标记。然后指向标记了“第二名”的玩家。让这名玩家重新入睡。",
      "reminders": ["疯狂", "第二名"],
      "team": "minion",
      "ability": "每个夜晚，你要选择两名玩家：明天第一名玩家需要“疯狂”地证明第二名玩家是邪恶的，否则他们可能会死亡。"
    },
    {
      "id": "bootlegger",
      "image": "https://clocktower-wiki.gstonegames.com/images/thumb/9/97/Bootlegger.png/240px-Bootlegger.png",
      "name": "私货商人",
      "team": "fabled",
      "ability": "这个剧本包含有自制角色或自制规则。"
    },
    {
      "id": "gardener",
      "image": "https://clocktower-wiki.gstonegames.com/images/thumb/1/19/Gardener.png/240px-Gardener.png",
      "name": "园丁",
      "team": "fabled",
      "ability": "由说书人来为一名或更多玩家派发角色。"
    },
    {
      "ability": "你只能使用投票标记才能投票。死亡的玩家可以将他的投票标记给你，如果他这么做，你会得知他的阵营。你不会中毒和醉酒。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/beggar.png",
      "edition": "custom",
      "flavor": "",
      "id": "beggarbutton",
      "firstNightReminder": "",
      "otherNightReminder": "",
      "name": "乞丐",
      "otherNight": 0,
      "setup": 0,
      "reminders": [
        "被得知"
      ],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 0
    },
    {
      "ability": "每个夜晚，你要选择除你以外的一名玩家：明天白天他的投票会被算作负数。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/thief.png",
      "edition": "custom",
      "flavor": "",
      "id": "thiefbutton",
      "firstNightReminder": "窃贼指向一名玩家。将负票标记放在那名玩家旁。",
      "otherNightReminder": "窃贼指向一名玩家。将负票标记放在那名玩家旁。",
      "name": "窃贼",
      "otherNight": 1,
      "setup": 0,
      "reminders": [
        "负票"
      ],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 1
    },
    {
      "ability": "如果你的阵营的一名玩家被处决，你可能会代替他被处决。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/scapegoat.png",
      "edition": "custom",
      "flavor": "",
      "id": "scapegoatbutton",
      "firstNightReminder": "",
      "otherNightReminder": "",
      "name": "替罪羊",
      "otherNight": 0,
      "setup": 0,
      "reminders": [],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 0
    },
    {
      "ability": "每局游戏限一次，如果其他玩家发起了提名，你可以选择让本次提名直接执行处决或让投票无效。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/judge.png",
      "edition": "custom",
      "flavor": "",
      "id": "judgebutton",
      "firstNightReminder": "",
      "otherNightReminder": "",
      "name": "法官",
      "otherNight": 0,
      "setup": 0,
      "reminders": [
        "失去能力"
      ],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 0
    },
    {
      "ability": "每个白天，你可以选择至多三对玩家交换座位。玩家不能离开座位私聊。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/matron.png",
      "edition": "custom",
      "flavor": "",
      "id": "matronbutton",
      "firstNightReminder": "",
      "otherNightReminder": "",
      "name": "女舍监",
      "otherNight": 0,
      "setup": 0,
      "reminders": [],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 0
    },
    {
      "ability": "只有你和死亡的玩家可以投票，并且你们的投票不需要使用投票标记。忽略票数需要过半的要求。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/voudon.png",
      "edition": "custom",
      "flavor": "",
      "id": "voudonbutton",
      "firstNightReminder": "",
      "otherNightReminder": "",
      "name": "巫毒师",
      "otherNight": 0,
      "setup": 0,
      "reminders": [],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 0
    },
    {
      "ability": "在你的首个夜晚，如果你是善良的，你会获得一个镇民角色的能力；如果你是邪恶的，你会获得一个爪牙角色的能力。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/apprentice.png",
      "edition": "custom",
      "flavor": "",
      "id": "apprenticebutton",
      "firstNightReminder": "对学徒展示一个镇民或爪牙标记。在魔典中，用那个角色标记代替学徒标记，并在一旁标识该玩家是学徒。",
      "otherNightReminder": "",
      "name": "学徒",
      "otherNight": 0,
      "setup": 0,
      "remindersGlobal": [
        "是学徒"
      ],
      "team": "traveler",
      "firstNight": 1
    },
    {
      "ability": "只有说书人可以发起提名。每个白天说书人至少要提名一名你对立阵营的玩家。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/bishop.png",
      "edition": "custom",
      "flavor": "",
      "id": "bishopbutton",
      "firstNightReminder": "",
      "otherNightReminder": "",
      "name": "主教",
      "otherNight": 0,
      "setup": 0,
      "reminders": [
        "对立提名"
      ],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 0
    },
    {
      "ability": "如果你表现得很有趣，当天你不能被流放。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/deviant.png",
      "edition": "custom",
      "flavor": "",
      "id": "deviantbutton",
      "firstNightReminder": "",
      "otherNightReminder": "",
      "name": "怪咖",
      "otherNight": 0,
      "setup": 0,
      "reminders": [],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 0
    },
    {
      "ability": "每局游戏限一次，在夜晚时*，你可以选择一名死亡的玩家：他重新获得能力直到下个黄昏。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/bone_collector.png",
      "edition": "custom",
      "flavor": "",
      "id": "bone_collectorbutton",
      "firstNightReminder": "",
      "otherNightReminder": "集骨者选择不使用能力，或指向一名死亡玩家。放置恢复能力标记提示，并且该玩家当晚可能会因此醒来并使用能力。",
      "name": "集骨者",
      "otherNight": 1,
      "setup": 0,
      "reminders": [
        "重获能力",
        "失去能力"
      ],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 0
    },
    {
      "ability": "每个夜晚，直至下个黄昏，由说书人二选一：1）一名玩家解除并免受醉酒和中毒影响，且会得知正确信息；2）一名玩家的能力可以生效两次。该玩家会得知是哪个效果。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/barista.png",
      "edition": "custom",
      "flavor": "",
      "id": "baristabutton",
      "firstNightReminder": "说书人选择一名玩家唤醒，并告诉他触发了咖啡师的什么效果。",
      "otherNightReminder": "说书人选择一名玩家唤醒，并告诉他触发了咖啡师的什么效果。",
      "name": "咖啡师",
      "otherNight": 1,
      "setup": 0,
      "reminders": [
        "清醒&健康",
        "行动两次"
      ],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 1
    },
    {
      "ability": "每个夜晚，直至下个黄昏，由说书人二选一：1）一名玩家解除并免受醉酒和中毒影响，且会得知正确信息；2）一名玩家的能力可以生效两次。该玩家会得知是哪个效果。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/harlot.png",
      "edition": "custom",
      "flavor": "",
      "id": "harlotbutton",
      "firstNightReminder": "",
      "otherNightReminder": "让流莺指向任意一名玩家。让流莺重新入睡。唤醒被选中的玩家，对该玩家展示“该角色的能力对你生效”提示标记和流莺角色标记。该玩家需要通过点头表示是，摇头表示否。然后让该玩家重新入睡。如果被选择的玩家摇头了表示否，则无事发生，继续进行夜晚阶段。如果被选择的玩家点头了表示是，则唤醒流莺并向流莺展示被选择的玩家的角色标记。让流莺再次入睡。如果你决定让两名玩家一起死——将“死亡”提示标记分别放在两者的角色标记旁。",
      "name": "流莺",
      "otherNight": 1,
      "setup": 0,
      "reminders": [
        "死亡"
      ],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 0
    },
    {
      "ability": "每个白天，首次处决后，你可以再次发起提名。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/butcher.png",
      "edition": "custom",
      "flavor": "",
      "id": "butcherbutton",
      "firstNightReminder": "",
      "name": "屠夫",
      "otherNight": 0,
      "setup": 0,
      "reminders": [
      ],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 0
    },
    {
      "ability": "每个白天限一次，你可以杀死与你邻近的两名存活的玩家中的一名，但需要另一边那个存活的玩家同意。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/role_icon/harlot.png",
      "edition": "custom",
      "flavor": "",
      "id": "gangsterbutton",
      "firstNightReminder": "",
      "otherNightReminder": "",
      "name": "黑帮",
      "otherNight": 0,
      "setup": 0,
      "reminders": [],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 0
    },
    {
      "firstNightReminder": "",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "失忆的镇民",
      "otherNight": 0,
      "setup": false,
      "reminders": [

      ],
      "id": "1001button",
      "edition": "snv",
      "remindersGlobal": [
        "完美"
      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "你不知道你有什么能力，但你的能力会正常生效。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/amnesiac.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "失忆的外来者",
      "otherNight": 0,
      "setup": false,
      "reminders": [

      ],
      "id": "1002button",
      "edition": "snv",
      "remindersGlobal": [
        "完美"
      ],
      "team": "outsider",
      "firstNight": 0,
      "ability": "你不知道你有什么能力，但你的能力会正常生效。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/qymyr_2.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "失忆的爪牙",
      "otherNight": 0,
      "setup": false,
      "reminders": [

      ],
      "id": "1003button",
      "edition": "snv",
      "remindersGlobal": [
        "完美"
      ],
      "team": "minion",
      "firstNight": 0,
      "ability": "你不知道你有什么能力，但你的能力会正常生效。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/qymyr_3.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "失忆的恶魔",
      "otherNight": 0,
      "setup": false,
      "reminders": [

      ],
      "id": "1004button",
      "edition": "snv",
      "remindersGlobal": [
        "完美"
      ],
      "team": "demon",
      "firstNight": 0,
      "ability": "你不知道你有什么能力，但你的能力会正常生效。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/qymyr_4.png"
    },
    {
      "firstNightReminder": "展示那个镇民角色标记。指向被你标记“镇民”和“错误”的两名玩家。",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "洗衣妇",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "镇民",
        "错误"
      ],
      "id": "washerwomanbutton",
      "edition": "tb",
      "team": "townsfolk",
      "name_eng": "Washerwoman",
      "firstNight": 32,
      "ability": "在你的首个夜晚，你会得知两名玩家和一个镇民角色：这两名玩家之一是该角色。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/washerwoman.png"
    },
    {
      "firstNightReminder": "展示那个外来者角色标记。指向被你标记“外来者”和“错误”的两名玩家。",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "图书管理员",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "外来者",
        "错误",
        "没有外来者"
      ],
      "id": "librarianbutton",
      "edition": "tb",
      "team": "townsfolk",
      "name_eng": "Librarian",
      "firstNight": 33,
      "ability": "在你的首个夜晚，你会得知两名玩家和一个外来者角色：这两名玩家之一是该角色（或者你会得知没有外来者在场）。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/librarian.png"
    },
    {
      "firstNightReminder": "展示那个爪牙角色标记。指向被你标记“爪牙”和“错误”的两名玩家。",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "调查员",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "爪牙",
        "错误",
        "没有爪牙"
      ],
      "id": "investigatorbutton",
      "edition": "tb",
      "team": "townsfolk",
      "name_eng": "Investigator",
      "firstNight": 34,
      "ability": "在你的首个夜晚，你会得知两名玩家和一个爪牙角色：这两名玩家之一是该角色（或者你会得知没有爪牙在场）。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/investigator.png"
    },
    {
      "firstNightReminder": "给他展示数字手势来告诉他场上邻座邪恶玩家有多少对。",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "厨师",
      "otherNight": 0,
      "setup": false,
      "reminders": [],
      "id": "chefbutton",
      "edition": "tb",
      "team": "townsfolk",
      "name_eng": "Chef",
      "firstNight": 35,
      "ability": "在你的首个夜晚，你会得知场上邻座的邪恶玩家有多少对。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/chef.png"
    },
    {
      "firstNightReminder": "给他展示数字手势来告诉他与他邻近的存活玩家有几人是邪恶的。",
      "isOfficial": true,
      "otherNightReminder": "给他展示数字手势来告诉他与他邻近的存活玩家有几人是邪恶的。",
      "name": "共情者",
      "otherNight": 53,
      "setup": false,
      "reminders": [],
      "id": "empathbutton",
      "edition": "tb",
      "team": "townsfolk",
      "name_eng": "Empath",
      "firstNight": 36,
      "ability": "每个夜晚，你会得知与你邻近的两名存活的玩家中邪恶玩家的数量。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/empath.png"
    },
    {
      "firstNightReminder": "让占卜师选择两名玩家。如果其中有恶魔或“干扰项”，点头示意，否则摇头。",
      "isOfficial": true,
      "otherNightReminder": "让占卜师选择两名玩家。如果其中有恶魔或“干扰项”，点头示意，否则摇头。",
      "name": "占卜师",
      "otherNight": 54,
      "setup": false,
      "reminders": [
        "干扰项"
      ],
      "id": "fortune_tellerbutton",
      "edition": "tb",
      "team": "townsfolk",
      "name_eng": "Fortune Teller",
      "firstNight": 37,
      "ability": "每个夜晚，你要选择两名玩家：你会得知他们之中是否有恶魔。会有一名善良玩家始终被你的能力当作恶魔。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/fortune_teller.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果有玩家今天白天死于处决，唤醒送葬者并对他展示那名玩家的角色标记。",
      "name": "送葬者",
      "otherNight": 56,
      "setup": false,
      "reminders": [
        "死于处决"
      ],
      "id": "undertakerbutton",
      "edition": "tb",
      "team": "townsfolk",
      "name_eng": "Undertaker",
      "firstNight": 0,
      "ability": "每个夜晚*，你会得知今天白天死于处决的玩家的角色。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/undertaker.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "让僧侣选择除自己外的一名玩家。标记那名玩家被保护。",
      "name": "僧侣",
      "otherNight": 13,
      "setup": false,
      "reminders": [
        "保护"
      ],
      "id": "monkbutton",
      "edition": "tb",
      "team": "townsfolk",
      "name_eng": "Monk",
      "firstNight": 0,
      "ability": "每个夜晚*，你要选择除你以外的一名玩家：当晚恶魔的负面能力对他无效。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/monk.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果守鸦人今晚死亡，唤醒他并让他选择一名玩家。对他展示那名玩家的角色标记。",
      "name": "守鸦人",
      "otherNight": 42,
      "setup": false,
      "reminders": [],
      "id": "ravenkeeperbutton",
      "edition": "tb",
      "team": "townsfolk",
      "name_eng": "Ravenkeeper",
      "firstNight": 0,
      "ability": "如果你在夜晚死亡，你会被唤醒，然后你要选择一名玩家：你会得知他的角色。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/ravenkeeper.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "贞洁者",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "失去能力",
        "被处决"
      ],
      "id": "virginbutton",
      "edition": "tb",
      "team": "townsfolk",
      "name_eng": "Virgin",
      "firstNight": 0,
      "ability": "当你首次作为贞洁者被提名时，如果提名你的玩家是镇民，他立刻被处决。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/virgin.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "猎手",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "失去能力",
        "死亡"
      ],
      "id": "slayerbutton",
      "edition": "tb",
      "team": "townsfolk",
      "name_eng": "Slayer",
      "firstNight": 0,
      "ability": "每局游戏限一次，你可以在白天时公开选择一名玩家：如果他是恶魔，他死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/slayer.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "士兵",
      "otherNight": 0,
      "setup": false,
      "reminders": [],
      "id": "soldierbutton",
      "edition": "tb",
      "team": "townsfolk",
      "name_eng": "Soldier",
      "firstNight": 0,
      "ability": "恶魔的负面能力对你无效。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/soldier.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "镇长",
      "otherNight": 0,
      "setup": false,
      "reminders": [],
      "id": "mayorbutton",
      "edition": "tb",
      "team": "townsfolk",
      "name_eng": "Mayor",
      "firstNight": 0,
      "ability": "如果只有3名玩家存活（含旅行者）且白天没有玩家被处决，你的阵营获胜。如果你在夜晚即将死亡，可能会有一名其他玩家代替你死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/mayor.png"
    },
    {
      "firstNightReminder": "让管家选择一名玩家。标记那名玩家为他的主人。",
      "isOfficial": true,
      "otherNightReminder": "让管家选择一名玩家。标记那名玩家为他的主人。如果管家前一天违反了规则，私下告知他。",
      "name": "管家",
      "otherNight": 55,
      "setup": false,
      "reminders": [
        "主人"
      ],
      "id": "butlerbutton",
      "edition": "tb",
      "team": "outsider",
      "name_eng": "Butler",
      "firstNight": 38,
      "ability": "每个夜晚，你要选择除你以外的一名玩家：明天白天，只有他投票时你才能投票。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/butler.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "酒鬼",
      "otherNight": 0,
      "setup": true,
      "reminders": [],
      "id": "drunkbutton",
      "edition": "tb",
      "remindersGlobal": [
        "是酒鬼"
      ],
      "team": "outsider",
      "name_eng": "Drunk",
      "firstNight": 0,
      "ability": "你不知道你是酒鬼。你以为你是一个镇民角色，但其实你不是。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/drunk.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "陌客",
      "otherNight": 0,
      "setup": false,
      "reminders": [],
      "id": "reclusebutton",
      "edition": "tb",
      "team": "outsider",
      "name_eng": "Recluse",
      "firstNight": 0,
      "ability": "你可能会被当作邪恶阵营、爪牙角色或恶魔角色，即使你已死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/recluse.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "圣徒",
      "otherNight": 0,
      "setup": false,
      "reminders": [],
      "id": "saintbutton",
      "edition": "tb",
      "team": "outsider",
      "name_eng": "Saint",
      "firstNight": 0,
      "ability": "如果你死于处决，你的阵营落败。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/saint.png"
    },
    {
      "firstNightReminder": "让投毒者选择一名玩家。标记那名玩家中毒。",
      "isOfficial": true,
      "otherNightReminder": "让投毒者选择一名玩家。标记那名玩家中毒。在黄昏时移除上个“中毒”标记。",
      "name": "投毒者",
      "otherNight": 8,
      "setup": false,
      "reminders": [
        "中毒"
      ],
      "id": "poisonerbutton",
      "edition": "tb",
      "team": "minion",
      "name_eng": "Poisoner",
      "firstNight": 17,
      "ability": "每个夜晚，你要选择一名玩家：他中毒直到下个黄昏。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/poisoner.png"
    },
    {
      "firstNightReminder": "将魔典展示给间谍，他想看多久就看多久。",
      "isOfficial": true,
      "otherNightReminder": "将魔典展示给间谍，他想看多久就看多久。",
      "name": "间谍",
      "otherNight": 68,
      "setup": false,
      "reminders": [],
      "id": "spybutton",
      "edition": "tb",
      "team": "minion",
      "name_eng": "Spy",
      "firstNight": 48,
      "ability": "每个夜晚，你能查看魔典。你可能会被当作善良阵营、镇民角色或外来者角色，即使你已死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/spy.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果红唇女郎今天变成了恶魔，对她展示“你是”信息标记，和转变的恶魔角色标记。",
      "name": "红唇女郎",
      "otherNight": 20,
      "setup": false,
      "reminders": [],
      "id": "scarlet_womanbutton",
      "edition": "tb",
      "remindersGlobal": [
        "是恶魔"
      ],
      "team": "minion",
      "name_eng": "Scarlet Woman",
      "firstNight": 0,
      "ability": "如果大于等于5名玩家存活时（除旅行者）恶魔死亡，你变成那个恶魔。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/scarletwoman.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "男爵",
      "otherNight": 0,
      "setup": true,
      "reminders": [],
      "id": "baronbutton",
      "edition": "tb",
      "team": "minion",
      "name_eng": "Baron",
      "firstNight": 0,
      "ability": "会有额外的外来者在场。[+2 外来者]",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/baron.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "让小恶魔选择一名玩家。标记那名玩家死亡。如果小恶魔选择了自己：用一个备用的小恶魔标记替换一个存活的爪牙角色标记。让原来的小恶魔重新入睡。唤醒新的小恶魔。对他展示“你是”信息标记，和小恶魔角色标记。",
      "name": "小恶魔",
      "otherNight": 24,
      "setup": false,
      "reminders": [
        "死亡",
        "曾是爪牙"
      ],
      "id": "impbutton",
      "edition": "tb",
      "team": "demon",
      "name_eng": "Imp",
      "firstNight": 0,
      "ability": "每个夜晚*，你要选择一名玩家：他死亡。如果你以这种方式自杀，一名爪牙会变成小恶魔。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/imp.png"
    },
    {
      "firstNightReminder": "指向她的孙子玩家，并展示该玩家的角色标记。",
      "isOfficial": true,
      "otherNightReminder": "如果恶魔的能力导致孙子死亡，祖母也会一同死亡。标记祖母死亡。",
      "name": "祖母",
      "otherNight": 50,
      "setup": false,
      "reminders": [
        "孙子",
        "死亡"
      ],
      "id": "grandmotherbutton",
      "edition": "bmr",
      "team": "townsfolk",
      "name_eng": "Grandmother",
      "firstNight": 39,
      "ability": "在你的首个夜晚，你会得知一名善良玩家和他的角色。如果他因恶魔的能力死亡，你也会死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/grandmother.png"
    },
    {
      "firstNightReminder": "让水手选择一名存活玩家。标记那名玩家或水手醉酒。",
      "isOfficial": true,
      "otherNightReminder": "让水手选择一名存活玩家。标记那名玩家或水手醉酒。",
      "name": "水手",
      "otherNight": 4,
      "setup": false,
      "reminders": [
        "醉酒"
      ],
      "id": "sailorbutton",
      "edition": "bmr",
      "team": "townsfolk",
      "name_eng": "Sailor",
      "firstNight": 10,
      "ability": "你不会死亡。每个夜晚，你要选择一名存活的玩家：你或他之一会醉酒直到下个黄昏。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/sailor.png"
    },
    {
      "firstNightReminder": "让侍女选择除自己外的两名存活玩家。给她展示数字手势来告诉她这些玩家中有几名玩家因自身能力被唤醒。",
      "isOfficial": true,
      "otherNightReminder": "让侍女选择除自己外的两名存活玩家。给她展示数字手势来告诉她这些玩家中有几名玩家因自身能力被唤醒。",
      "name": "侍女",
      "otherNight": 70,
      "setup": false,
      "reminders": ["被唤醒"],
      "id": "chambermaidbutton",
      "edition": "bmr",
      "team": "townsfolk",
      "name_eng": "Chambermaid",
      "firstNight": 50,
      "ability": "每个夜晚，你要选择除你以外的两名存活的玩家：你会得知他们中有多少玩家在当晚因为自身能力而被唤醒。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/chambermaid.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "让驱魔人选择一名玩家，不能是上一夜他选择过的玩家。让驱魔人重新入睡。如果驱魔人选中了恶魔：唤醒恶魔。展示“该角色的能力对你生效”信息标记和驱魔人角色标记。指向驱魔人玩家。",
      "name": "驱魔人",
      "otherNight": 22,
      "setup": false,
      "reminders": [
        "被选择"
      ],
      "id": "exorcistbutton",
      "edition": "bmr",
      "team": "townsfolk",
      "name_eng": "Exorcist",
      "firstNight": 0,
      "ability": "每个夜晚*，你要选择一名玩家（与上个夜晚不同）：如果你选中了恶魔，他会得知你是什么角色，但他当晚不会因其自身能力而被唤醒。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/exorcist.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "让旅店老板选择两名玩家。标记这两名玩家不会死亡，并标记其中一人醉酒直到下个黄昏。",
      "name": "旅店老板",
      "otherNight": 9,
      "setup": false,
      "reminders": [
        "不会死亡",
        "醉酒"
      ],
      "id": "innkeeperbutton",
      "edition": "bmr",
      "team": "townsfolk",
      "name_eng": "Innkeeper",
      "firstNight": 0,
      "ability": "每个夜晚*，你要选择两名玩家：他们当晚不会死亡，但其中一人会醉酒到下个黄昏。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/innkeeper.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "让赌徒选择一名玩家和一个角色。如果赌徒猜错了，标记赌徒死亡。",
      "name": "赌徒",
      "otherNight": 11,
      "setup": false,
      "reminders": [
        "死亡"
      ],
      "id": "gamblerbutton",
      "edition": "bmr",
      "team": "townsfolk",
      "name_eng": "Gambler",
      "firstNight": 0,
      "ability": "每个夜晚*，你要选择一名玩家并猜测他的角色：如果你猜错了，你会死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/gambler.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果白天的声明为真，会有一名玩家死亡，并由说书人来选择一名玩家，标记该玩家死亡。",
      "name": "造谣者",
      "otherNight": 47,
      "setup": false,
      "reminders": [
        "正确",
        "死亡"
      ],
      "id": "gossipbutton",
      "edition": "bmr",
      "team": "townsfolk",
      "name_eng": "Gossip",
      "firstNight": 0,
      "ability": "每个白天，你可以公开发表一个声明。如果该声明正确，在当晚会有一名玩家死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/gossip.png"
    },
    {
      "firstNightReminder": "侍臣可以选择一个角色。如果他这么做了，标记侍臣失去能力，标记被选择的角色所对应的玩家醉酒。之后的夜晚无需再唤醒侍臣。",
      "isOfficial": true,
      "otherNightReminder": "侍臣可以选择一个角色。如果他这么做了，标记侍臣失去能力，标记被选择的角色所对应的玩家醉酒。之后的夜晚无需再唤醒侍臣。",
      "name": "侍臣",
      "otherNight": 10,
      "setup": false,
      "reminders": [
        "醉酒1",
        "醉酒2",
        "醉酒3",
        "失去能力"
      ],
      "id": "courtierbutton",
      "edition": "bmr",
      "team": "townsfolk",
      "name_eng": "Courtier",
      "firstNight": 19,
      "ability": "每局游戏限一次，在夜晚时，你可以选择一个角色：如果该角色在场，该角色之一从当晚开始醉酒三天三夜。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/courtier.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "教授可以选择一名死亡玩家。如果他这么做了，标记教授失去能力，然后如果那名玩家是镇民，标记那名玩家被复活。之后的夜晚无需再唤醒教授。",
      "name": "教授",
      "otherNight": 45,
      "setup": false,
      "reminders": [
        "复活",
        "失去能力"
      ],
      "id": "professorbutton",
      "edition": "bmr",
      "team": "townsfolk",
      "name_eng": "Professor",
      "firstNight": 0,
      "ability": "每局游戏限一次，在夜晚时*，你可以选择一名死亡的玩家：如果他是镇民，他会复活。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/professor.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "吟游诗人",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "全员醉酒"
      ],
      "id": "minstrelbutton",
      "edition": "bmr",
      "team": "townsfolk",
      "name_eng": "Minstrel",
      "firstNight": 0,
      "ability": "当一名爪牙死于处决时，除了你和旅行者以外的所有其他玩家醉酒直到明天黄昏。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/minstrel.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "茶艺师",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "不会死亡"
      ],
      "id": "tea_ladybutton",
      "edition": "bmr",
      "team": "townsfolk",
      "name_eng": "Tea Lady",
      "firstNight": 0,
      "ability": "如果与你邻近的两名存活的玩家是善良的，他们不会死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/tealady.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "和平主义者",
      "otherNight": 0,
      "setup": false,
      "reminders": [],
      "id": "pacifistbutton",
      "edition": "bmr",
      "team": "townsfolk",
      "name_eng": "Pacifist",
      "firstNight": 0,
      "ability": "被处决的善良玩家可能不会死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/pacifist.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "弄臣",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "失去能力"
      ],
      "id": "foolbutton",
      "edition": "bmr",
      "team": "townsfolk",
      "name_eng": "Fool",
      "firstNight": 0,
      "ability": "当你首次将要死亡时，你不会死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/fool.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "修补匠可能会死亡。如果说书人选择让修补匠死亡，放置死亡标记。",
      "name": "修补匠",
      "otherNight": 48,
      "setup": false,
      "reminders": [
        "死亡"
      ],
      "id": "tinkerbutton",
      "edition": "bmr",
      "team": "outsider",
      "name_eng": "Tinker",
      "firstNight": 0,
      "ability": "你随时可能死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/tinker.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果月之子在白天触发了死亡能力并选择了一名善良玩家，该玩家死亡。标记那名玩家死亡。",
      "name": "月之子",
      "otherNight": 49,
      "setup": false,
      "reminders": [
        "被选择",
        "死亡"
      ],
      "id": "moonchildbutton",
      "edition": "bmr",
      "team": "outsider",
      "name_eng": "Moonchild",
      "firstNight": 0,
      "ability": "当你得知你死亡时，你要公开选择一名存活的玩家。如果他是善良的，在当晚他会死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/moonchild.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "莽夫",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "醉酒",
        "同一阵营"
      ],
      "id": "goonbutton",
      "edition": "bmr",
      "team": "outsider",
      "name_eng": "Goon",
      "firstNight": 0,
      "ability": "每个夜晚，首个使用其自身能力选择了你的玩家会醉酒直到下个黄昏。你会转变为他的阵营。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/goon.png"
    },
    {
      "firstNightReminder": "如果有七名或更多玩家，唤醒疯子：展示“他们是你的爪牙”信息标记。指向任意对应数量的玩家。展示“这些角色不在场”信息标记。展示三个善良角色。让疯子重新入睡。唤醒恶魔。展示“你是”信息标记和恶魔角色标记。展示“这名玩家是”信息标记和疯子角色标记，然后指向疯子玩家。",
      "isOfficial": true,
      "otherNightReminder": "做任何需要做的事情来模拟一位恶魔的行动。让疯子重新入睡。唤醒恶魔。对恶魔展示疯子角色标记，并指向疯子玩家，随后是疯子的攻击目标。",
      "name": "疯子",
      "otherNight": 21,
      "setup": false,
      "reminders": [

      ],
      "id": "lunaticbutton",
      "edition": "bmr",
      "remindersGlobal": [
        "是疯子",
        "被选择"
      ],
      "team": "outsider",
      "name_eng": "Lunatic",
      "firstNight": 7,
      "ability": "你以为你是一个恶魔，但其实你不是。恶魔知道你是什么角色以及你在每个夜晚选择了哪些玩家。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/lunatic.png"
    },
    {
      "firstNightReminder": "对他展示所有在场的外来者标记。",
      "isOfficial": true,
      "otherNightReminder": "如果有外来者在今天白天死亡，让教父选择一名玩家。标记那名玩家死亡。",
      "name": "教父",
      "otherNight": 38,
      "setup": true,
      "reminders": [
        "今晚复仇",
        "死亡"
      ],
      "id": "godfatherbutton",
      "edition": "bmr",
      "team": "minion",
      "name_eng": "Godfather",
      "firstNight": 21,
      "ability": "在你的首个夜晚，你会得知有哪些外来者角色在场。如果有外来者在白天死亡，你会在当晚被唤醒并且你要选择一名玩家：他死亡。[-1或+1外来者]",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/godfather.png"
    },
    {
      "firstNightReminder": "让魔鬼代言人选择一名存活玩家。标记那名玩家处决不死。",
      "isOfficial": true,
      "otherNightReminder": "让魔鬼代言人选择一名存活玩家，不能是上一夜他选择过的玩家。标记那名玩家处决不死。",
      "name": "魔鬼代言人",
      "otherNight": 14,
      "setup": false,
      "reminders": [
        "处决不死"
      ],
      "id": "devils_advocatebutton",
      "edition": "bmr",
      "team": "minion",
      "name_eng": "Devil's Advocate",
      "firstNight": 22,
      "ability": "每个夜晚，你要选择一名存活的玩家（与上个夜晚不同）：如果明天白天他被处决，他不会死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/devilsadvocate.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "刺客可以选择一名玩家。如果他这么做了，标记那名玩家死亡，且刺客失去能力，之后的夜晚无需再唤醒刺客。",
      "name": "刺客",
      "otherNight": 37,
      "setup": false,
      "reminders": [
        "必定死亡",
        "失去能力"
      ],
      "id": "assassinbutton",
      "edition": "bmr",
      "team": "minion",
      "name_eng": "Assassin",
      "firstNight": 0,
      "ability": "每局游戏限一次，在夜晚时*，你可以选择一名玩家：他死亡，即使因为任何原因让他不会死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/assassin.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "幕后主使",
      "otherNight": 0,
      "setup": false,
      "reminders": ["主谋夜", "主谋日"],
      "id": "mastermindbutton",
      "edition": "bmr",
      "team": "minion",
      "name_eng": "Mastermind",
      "firstNight": 0,
      "ability": "如果恶魔因为死于处决而因此导致游戏结束时，再额外进行一个夜晚和一个白天。在那个白天如果有玩家被处决，他的阵营落败。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/mastermind.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果今天白天没有人死亡，让僵怖选择一名玩家。标记那名玩家死亡。",
      "name": "墓地僵怖",
      "otherNight": 25,
      "setup": false,
      "reminders": [
        "死亡",
        "不能攻击",
        "仍然存活"
      ],
      "id": "zombuulbutton",
      "edition": "bmr",
      "team": "demon",
      "name_eng": "Zombuul",
      "firstNight": 0,
      "ability": "每个夜晚*，如果今天白天没有玩家死亡，你会被唤醒并要选择一名玩家：他死亡。当你首次死亡后，你仍存活，但会被当作死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/zombuul.png"
    },
    {
      "firstNightReminder": "让普卡选择一名玩家。标记那名玩家中毒。",
      "isOfficial": true,
      "otherNightReminder": "让普卡选择一名玩家。标记那名玩家中毒。上一个因普卡中毒的玩家死亡，随后恢复健康。",
      "name": "普卡",
      "otherNight": 26,
      "setup": false,
      "reminders": [
        "死亡",
        "中毒"
      ],
      "id": "pukkabutton",
      "edition": "bmr",
      "team": "demon",
      "name_eng": "Pukka",
      "firstNight": 28,
      "ability": "每个夜晚，你要选择一名玩家：他中毒。上个因你的能力中毒的玩家会死亡并恢复健康。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/pukka.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "上一夜被沙巴洛斯选择且当前已死亡的玩家之一可能被反刍，如果被反刍，标记那名玩家被复活。让沙巴洛斯选择两名玩家。标记这两名玩家死亡。",
      "name": "沙巴洛斯",
      "otherNight": 27,
      "setup": false,
      "reminders": [
        "被攻击",
        "死亡",
        "复活"
      ],
      "id": "shabalothbutton",
      "edition": "bmr",
      "team": "demon",
      "name_eng": "Shabaloth",
      "firstNight": 0,
      "ability": "每个夜晚*，你要选择两名玩家：他们死亡。你的上个夜晚选择过的且当前死亡的玩家可能会被你反刍而复活。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/shabaloth.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "杀戮之花可以选择一名玩家；或如果上一次他被唤醒时未做选择，让他选择三名玩家。标记这些玩家死亡。",
      "name": "杀戮之花",
      "otherNight": 28,
      "setup": false,
      "reminders": [
        "死亡",
        "杀戮x3"
      ],
      "id": "pobutton",
      "edition": "bmr",
      "team": "demon",
      "name_eng": "Po",
      "firstNight": 0,
      "ability": "每个夜晚*，你可以选择一名玩家：他死亡。如果你上次选择时没有选择任何玩家，当晚你要选择三名玩家：他们死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/po.png"
    },
    {
      "firstNightReminder": "给他展示数字手势来告诉他恶魔与爪牙之间最近的距离。",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "钟表匠",
      "otherNight": 0,
      "setup": false,
      "reminders": ["被检测"],
      "id": "clockmakerbutton",
      "edition": "snv",
      "team": "townsfolk",
      "name_eng": "Clockmaker",
      "firstNight": 40,
      "ability": "在你的首个夜晚，你会得知恶魔与爪牙之间最近的距离。（邻座的玩家距离为1）",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/clockmaker.png"
    },
    {
      "firstNightReminder": "让筑梦师指向一名玩家。对他展示善良和邪恶的角色标记各一个，其中一个是属于该玩家的角色。",
      "isOfficial": true,
      "otherNightReminder": "让筑梦师指向一名玩家。对他展示善良和邪恶的角色标记各一个，其中一个是属于该玩家的角色。",
      "name": "梦卜者",
      "otherNight": 57,
      "setup": false,
      "reminders": [],
      "id": "dreamerbutton",
      "edition": "snv",
      "team": "townsfolk",
      "name_eng": "Dreamer",
      "firstNight": 41,
      "ability": "每个夜晚，你要选择除你及旅行者以外的一名玩家：你会得知一个善良角色和一个邪恶角色，该玩家是其中一个角色。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/dreamer.png"
    },
    {
      "firstNightReminder": "让舞蛇人选择一名玩家。如果舞蛇人选中了恶魔：展示“你是”信息标记和恶魔角色标记。用拇指向下代表他阵营变为邪恶。在魔典中交换舞蛇人和恶魔的角色标记。让原来的舞蛇人重新入睡。唤醒原来的恶魔。对老恶魔展示“你是”信息标记和舞蛇人角色标记，并用拇指向上代表他阵营变为善良。",
      "isOfficial": true,
      "otherNightReminder": "让舞蛇人选择一名玩家。如果舞蛇人选中了恶魔：展示“你是”信息标记和恶魔角色标记。用拇指向下代表他阵营变为邪恶。在魔典中交换舞蛇人和恶魔的角色标记。让原来的舞蛇人重新入睡。唤醒原来的恶魔。对老恶魔展示“你是”信息标记和舞蛇人角色标记，并用拇指向上代表他阵营变为善良。",
      "name": "舞蛇人",
      "otherNight": 12,
      "setup": false,
      "reminders": [
        "中毒"
      ],
      "id": "snake_charmerbutton",
      "edition": "snv",
      "team": "townsfolk",
      "name_eng": "Snake Charmer",
      "firstNight": 20,
      "ability": "每个夜晚，你要选择一名存活的玩家：如果你选中了恶魔，你和他交换角色和阵营，然后他中毒。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/snakecharmer.png"
    },
    {
      "firstNightReminder": "给他展示数字手势来告诉他在首个夜晚里有多少玩家的角色能力受他人影响而未正常生效。",
      "isOfficial": true,
      "otherNightReminder": "给他展示数字手势来告诉他从上个黎明到数学家醒来前有多少玩家的角色能力受他人影响而未正常生效。",
      "name": "数学家",
      "otherNight": 71,
      "setup": false,
      "reminders": [
        "未正常生效+1"
      ],
      "id": "mathematicianbutton",
      "edition": "snv",
      "team": "townsfolk",
      "name_eng": "Mathematician",
      "firstNight": 51,
      "ability": "每个夜晚，你会得知有多少名玩家的能力因为其它玩家的能力而未正常生效。(从上个黎明到你被唤醒时）",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/mathematician.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "对她点头或摇头来示意今天白天是否有恶魔投过票。",
      "name": "卖花女孩",
      "otherNight": 58,
      "setup": false,
      "reminders": [],
      "remindersGlobal": [
        "恶魔未投票",
        "恶魔已投票"
      ],
      "id": "flowergirlbutton",
      "edition": "snv",
      "team": "townsfolk",
      "name_eng": "Flowergirl",
      "firstNight": 0,
      "ability": "每个夜晚*，你会得知在今天白天时是否有恶魔投过票。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/flowergirl.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "对他点头或摇头示意今天白天是否有爪牙发起过提名。",
      "name": "城镇公告员",
      "otherNight": 59,
      "setup": false,
      "reminders": [],
      "remindersGlobal": [
        "爪牙未提名",
        "爪牙已提名"
      ],
      "id": "town_crierbutton",
      "edition": "snv",
      "team": "townsfolk",
      "name_eng": "Town Crier",
      "firstNight": 0,
      "ability": "每个夜晚*，你会得知在今天白天时是否有爪牙发起过提名。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/towncrier.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "给他展示数字手势来告诉他当前已死亡的玩家中有多少玩家是邪恶的。",
      "name": "神谕者",
      "otherNight": 60,
      "setup": false,
      "reminders": [],
      "id": "oraclebutton",
      "edition": "snv",
      "team": "townsfolk",
      "name_eng": "Oracle",
      "firstNight": 0,
      "ability": "每个夜晚*，你会得知有多少名已死亡的玩家是邪恶的。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/oracle.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "博学者",
      "otherNight": 0,
      "setup": false,
      "reminders": [],
      "id": "savantbutton",
      "edition": "snv",
      "team": "townsfolk",
      "name_eng": "Savant",
      "firstNight": 0,
      "ability": "每个白天，你可以私下询问说书人以得知两条信息：一个是正确的，一个是错误的。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/savant.png"
    },
    {
      "firstNightReminder": "女裁缝可以选择除自己以外的两名玩家。如果她这么做了，对她点头或摇头示意这两名玩家是否为同一阵营，随后标记女裁缝失去能力。之后的夜晚无需再唤醒女裁缝。",
      "isOfficial": true,
      "otherNightReminder": "女裁缝可以选择除自己以外的两名玩家。如果她这么做了，对她点头或摇头示意这两名玩家是否为同一阵营，随后标记女裁缝失去能力。之后的夜晚无需再唤醒女裁缝。",
      "name": "女裁缝",
      "otherNight": 61,
      "setup": false,
      "reminders": [
        "失去能力"
      ],
      "id": "seamstressbutton",
      "edition": "snv",
      "team": "townsfolk",
      "name_eng": "Seamstress",
      "firstNight": 42,
      "ability": "每局游戏限一次，在夜晚时，你可以选择除你以外的两名玩家：你会得知他们是否为同一阵营。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/seamstress.png"
    },
    {
      "firstNightReminder": "哲学家可以选择一个角色。如果选择的角色不在场，将哲学家的角色标题替换成对应角色，并标记“是哲学家”，否则标记该角色对应的玩家醉酒。从现在开始，你需要以哲学家获得能力的那种角色的行动方式来唤醒哲学家。",
      "isOfficial": true,
      "otherNightReminder": "哲学家可以选择一个角色。如果选择的角色不在场，将哲学家的角色标题替换成对应角色，并标记“是哲学家”，否则标记该角色对应的玩家醉酒。从现在开始，你需要以哲学家获得能力的那种角色的行动方式来唤醒哲学家。",
      "name": "哲学家",
      "otherNight": 2,
      "setup": false,
      "reminders": [
      ],
      "id": "philosopher333button",
      "edition": "snv",
      "remindersGlobal": [
        "是哲学家",
        "醉酒"
      ],
      "team": "townsfolk",
      "name_eng": "Philosopher1",
      "firstNight": 2,
      "ability": "每局游戏限一次，在夜晚时，你可以选择一个善良角色：你获得该角色的能力。如果这个角色在场，他醉酒。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/philosopher.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "艺术家",
      "otherNight": 0,

      "setup": false,
      "reminders": [
        "失去能力"
      ],
      "id": "artistbutton",
      "edition": "snv",
      "team": "townsfolk",
      "name_eng": "Artist",
      "firstNight": 0,
      "ability": "每局游戏限一次，在白天时，你可以私下询问说书⼈一个是非问题，你会得知该问题的答案。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/artist.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "给他展示数字手势来告诉他他当天白天猜测正确的次数。",
      "name": "杂耍艺人",
      "otherNight": 62,
      "setup": false,
      "reminders": [
        "猜测正确+1"
      ],
      "id": "jugglerbutton",
      "edition": "snv",
      "team": "townsfolk",
      "name_eng": "Juggler",
      "firstNight": 0,
      "ability": "在你的首个白天，你可以公开猜测任意玩家的角色最多五次。在当晚，你会得知猜测正确的角色数量。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/juggler.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果恶魔杀死了贤者，唤醒贤者并指向两名玩家，其中一名玩家是杀死他的恶魔。",
      "name": "贤者",
      "otherNight": 43,
      "setup": false,
      "reminders": [],
      "id": "sagebutton",
      "edition": "snv",
      "team": "townsfolk",
      "name_eng": "Sage",
      "firstNight": 0,
      "ability": "如果恶魔杀死了你，在当晚你会被唤醒并得知两名玩家，其中一名是杀死你的那个恶魔。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/sage.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "畸形秀演员",
      "otherNight": 0,
      "setup": false,
      "reminders": [],
      "id": "mutantbutton",
      "edition": "snv",
      "team": "outsider",
      "name_eng": "Mutant",
      "firstNight": 0,
      "ability": "如果你“疯狂”地证明自己是外来者，你可能被处决。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/mutant.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果心上人死亡，会有一名玩家立刻醉酒。如果你还没有让这件事情发生，那么现在为任意一位玩家放置醉酒标记。",
      "name": "心上人",
      "otherNight": 41,
      "setup": false,
      "reminders": [
        "醉酒"
      ],
      "id": "sweetheartbutton",
      "edition": "snv",
      "team": "outsider",
      "name_eng": "Sweetheart",
      "firstNight": 0,
      "ability": "当你死亡时，会有一名玩家开始醉酒。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/sweetheart.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果理发师今天死亡了，唤醒恶魔并展示“该角色的效果对你生效”信息标记和理发师角色标记。如果恶魔选择了两名玩家，将这两名玩家分别独自唤醒。对他们展示“你是”信息标记和他们的新角色标记。",
      "name": "理发师",
      "otherNight": 40,
      "setup": false,
      "reminders": [
        "今晚理发",
        "被理发"
      ],
      "id": "barberbutton",
      "edition": "snv",
      "team": "outsider",
      "name_eng": "Barber",
      "firstNight": 0,
      "ability": "如果你死亡，在当晚恶魔可以选择两名玩家（不能选择其他恶魔）交换角色。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/barber.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "呆瓜",
      "otherNight": 0,
      "setup": false,
      "reminders": [],
      "id": "klutzbutton",
      "edition": "snv",
      "team": "outsider",
      "name_eng": "Klutz",
      "firstNight": 0,
      "ability": "当你得知你死亡时，你要公开选择一名存活的玩家：如果他是邪恶的，你的阵营落败。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/klutz.png"
    },
    {
      "firstNightReminder": "唤醒镜像双子和他的对立双子，让他们进行眼神接触。对镜像双子展示对立双子的角色标记，并对对立双子展示镜像双子的角色标记。",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "镜像双子",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "对立双子"
      ],
      "id": "evil_twinbutton",
      "edition": "snv",
      "team": "minion",
      "name_eng": "Evil Twin",
      "firstNight": 23,
      "ability": "你与一名对立阵营的玩家互相知道对方是什么角色。如果其中善良玩家被处决，邪恶阵营获胜。如果你们都存活，善良阵营无法获胜。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/eviltwin.png"
    },
    {
      "firstNightReminder": "让女巫选择一名玩家。标记那名玩家被诅咒。",
      "isOfficial": true,
      "otherNightReminder": "让女巫选择一名玩家。标记那名玩家被诅咒。",
      "name": "女巫",
      "otherNight": 15,
      "setup": false,
      "reminders": [
        "下蛊施咒"
      ],
      "id": "witchbutton",
      "edition": "snv",
      "team": "minion",
      "name_eng": "Witch",
      "firstNight": 24,
      "ability": "每个夜晚，你要选择一名玩家：如果他明天白天发起提名，他死亡。如果只有三名存活的玩家，你失去此能力。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/witch.png"
    },
    {
      "firstNightReminder": "让洗脑师选择一名玩家和一个善良角色。标记那名玩家疯狂。让洗脑师重新入睡。唤醒洗脑师的目标。对这名玩家展示“该角色的能力对你生效”信息标记，洗脑师角色标记，该玩家需要疯狂证明的角色标记。",
      "isOfficial": true,
      "otherNightReminder": "让洗脑师选择一名玩家和一个善良角色。标记那名玩家疯狂。让洗脑师重新入睡。唤醒洗脑师的目标。对这名玩家展示“该角色的能力对你生效”信息标记，洗脑师角色标记，该玩家需要疯狂证明的角色标记。",
      "name": "洗脑师",
      "otherNight": 16,
      "setup": false,
      "reminders": [
        "疯狂"
      ],
      "id": "cerenovusbutton",
      "edition": "snv",
      "team": "minion",
      "name_eng": "Cerenovus",
      "firstNight": 25,
      "ability": "每个夜晚，你要选择一名玩家和一个善良角色。他明天白天和夜晚需要“疯狂”地证明自己是这个角色，不然他可能被处决。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/cerenovus.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "让麻脸巫婆选择一名玩家和一个角色。如果她选择的角色不在场：让麻脸巫婆重新入睡。唤醒她的目标玩家。对该玩家展示“你是”信息标记和他的新角色标记。",
      "name": "麻脸巫婆",
      "otherNight": 17,
      "setup": false,
      "reminders": ["死亡"],
      "id": "pit-hagbutton",
      "edition": "snv",
      "team": "minion",
      "name_eng": "Pit-Hag",
      "firstNight": 0,
      "ability": "每个夜晚*，你要选择一名玩家和一个角色，如果该角色不在场，他变成该角色。如果因此创造了一个恶魔，当晚的死亡由说书人决定。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/pithag.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "让方古选择一名玩家。标记那名玩家死亡。如果他选择了外来者，且“首次”标记未放置在魔典中：用备用的方古角色标记替换那名外来者的角色标记。让方古重新入睡。唤醒方古的目标玩家。对该玩家展示“你是”信息标记和方古角色标记，并用拇指向下代表他阵营变为邪恶。将“首次”标记放置在魔典中。标记原本的方古玩家死亡，且他选择的玩家不会被标记为死亡。",
      "name": "噬梦游魂",
      "otherNight": 29,
      "setup": true,
      "reminders": [
        "死亡"
      ],
      "id": "fang_gubutton",
      "edition": "snv",
      "remindersGlobal": [
        "已侵染"
      ],
      "team": "demon",
      "name_eng": "Fang Gu",
      "firstNight": 0,
      "ability": "每个夜晚*，你要选择一名玩家：他死亡。首个会被这种能力杀死的外来者改为变成一个邪恶的噬梦游魂且你代替他死亡。[+1外来者]",
      "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/fang_gu.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "让亡骨魔选择一名玩家。标记那名玩家死亡。如果该玩家是爪牙，标记该玩家保留能力，并标记与该玩家邻近的镇民玩家之一中毒。",
      "name": "亡灵法师",
      "otherNight": 32,
      "setup": true,
      "reminders": [
        "死亡",
        "保留能力",
        "中毒"
      ],
      "id": "vigormortisbutton",
      "edition": "snv",
      "team": "demon",
      "name_eng": "Vigormortis",
      "firstNight": 0,
      "ability": "每个夜晚*，你要选择一名玩家：他死亡。被你杀死的爪牙保留他的能力，且与他邻近的两名镇民之一中毒。[-1外来者]",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/vigormortis.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "让诺-达鲺选择一名玩家。标记那名玩家死亡。",
      "name": "腐化邪神",
      "otherNight": 30,
      "setup": false,
      "reminders": [
        "死亡",
        "中毒"
      ],
      "id": "no_dashiibutton",
      "edition": "snv",
      "team": "demon",
      "name_eng": "No Dashii",
      "firstNight": 0,
      "ability": "每个夜晚*，你要选择一名玩家：他死亡。与你邻近的两名镇民中毒。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/nodashii.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "让涡流选择一名玩家。标记那名玩家死亡。",
      "name": "迷乱漩涡",
      "otherNight": 31,
      "setup": false,
      "reminders": [
        "死亡"
      ],
      "id": "vortoxbutton",
      "edition": "snv",
      "team": "demon",
      "name_eng": "Vortox",
      "firstNight": 0,
      "ability": "每个夜晚*，你要选择一名玩家：他死亡。镇民玩家的能力都会产生错误信息。如果白天没⼈被处决，邪恶阵营获胜。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/vortox.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "半兽人指向一名存活玩家：如果那名玩家善良，则立刻死去且今夜不会再有玩家死亡。",
      "name": "半兽人",
      "otherNight": 22,
      "setup": false,
      "reminders": [
        "死亡"
      ],
      "id": "lycanthropebutton",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "name_eng": "Philosopher",
      "firstNight": 0,
      "ability": "每个夜晚*，你要选择一名存活的玩家，如果他是善良的，他死亡，并且当晚不会再有其他玩家死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/lycanthrope.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果国王被恶魔杀死，将唱诗男孩唤醒并告诉他谁是那个杀死国王的恶魔。",
      "name": "唱诗男孩",
      "otherNight": 43,
      "setup": false,
      "reminders": [
      ],
      "id": "choirboybutton",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "如果恶魔杀死了国王，当晚你会得知哪名玩家是恶魔。[+国王]",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/choirboy.png"
    },
    {
      "firstNightReminder": "唤醒恶魔，并告诉他国王是谁。",
      "isOfficial": true,
      "otherNightReminder": "如果死亡玩家人数大于存活玩家，唤醒国王并对其展示一个存活的角色标记。",
      "name": "国王",
      "otherNight": 63,
      "setup": false,
      "reminders": [
      ],
      "id": "kingofficial",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 8,
      "ability": "每个夜晚，如果死亡的玩家数量大于存活的玩家数量，你会得知一个存活的角色。恶魔知道你是国王。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/king.png"
    },
    {
      "firstNightReminder": "指向一名邪恶玩家。",
      "isOfficial": true,
      "otherNightReminder": "如果赏金猎人知晓的邪恶玩家死亡，指向另一名邪恶玩家。",
      "name": "赏金猎人",
      "otherNight": 64,
      "setup": false,
      "reminders": [
        "被得知",
        "邪恶"
      ],
      "id": "bounty_hunterbutton",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 44,
      "ability": "在你的首个夜晚，你会得知一名邪恶玩家。每当你得知的玩家死亡，你会在当晚得知另一名邪恶玩家。[会有一名镇民转变为邪恶阵营]",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/bountyhunter.png"
    },
    {
      "firstNightReminder": "以任意顺序指向三名玩家，其中一名邪恶。",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "贵族",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "被得知-善良",
        "被得知-邪恶"
      ],
      "id": "noblebutton",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "在你的首个夜晚，你会得知三名玩家：其中有且只有一名玩家是邪恶的。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/noble.png"
    },
    {
      "firstNightReminder": "对小精灵展示一个在场的镇民角色。",
      "isOfficial": true,
      "otherNightReminder": "如果该玩家死亡，小精灵现在获得它的能力。",
      "name": "小精灵",
      "otherNight": 41,
      "setup": false,
      "reminders": [

      ],
      "id": "pixiebutton",
      "edition": "snv",
      "remindersGlobal": [
        "需要疯狂",
        "获得能力"
      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "在你的首个夜晚，你会得知一个在场的镇民角色。如果你“疯狂”地证明你是该角色，当他死亡时你获得该角色的能力。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/pixie.png"
    },
    {
      "firstNightReminder": "告诉将军你认为的答案。",
      "isOfficial": true,
      "otherNightReminder": "告诉将军你认为的答案。",
      "name": "将军",
      "otherNight": 68,
      "setup": false,
      "reminders": [
        "均势",
        "善良优势",
        "邪恶优势"
      ],
      "id": "generalbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "townsfolk",
      "firstNight": 48,
      "ability": "每个夜晚，你会得知说书人认为哪个阵营当前更有优势（善良/邪恶/均势）。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/general.png"
    },
    {
      "firstNightReminder": "传教士选择一名玩家。如果选中了爪牙，则唤醒并告知他被传教士选中。",
      "isOfficial": true,
      "otherNightReminder": "传教士选择一名玩家。如果选中了爪牙，则唤醒并告知他被传教士选中。",
      "name": "传教士",
      "otherNight": 6,
      "setup": false,
      "reminders": [
        "被布道"
      ],
      "id": "preacherbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "townsfolk",
      "firstNight": 13,
      "ability": "每个夜晚，你要选择一名玩家：如果选中了爪牙，他会得知被传教士选中。所有被你选中的爪牙失去能力。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/preacher.png"
    },
    {
      "firstNightReminder": "选择一种尚未被气球驾驶员知晓的角色类型，并告知其一个符合该类型的玩家。在该玩家旁边标记已被知晓。如果所有类型均已被知晓或无该种类型，气球驾驶员不会醒来。",
      "isOfficial": true,
      "otherNightReminder": "选择一种尚未被气球驾驶员知晓的角色类型，并告知其一个符合该类型的玩家。在该玩家旁边标记已被知晓。如果所有类型均已被知晓或无该种类型，气球驾驶员不会醒来。",
      "name": "气球冒险家",
      "otherNight": 63,
      "setup": true,
      "reminders": [
        "得知镇民",
        "得知外来者",
        "得知爪牙",
        "得知恶魔",
        "得知旅行者"
      ],
      "id": "balloonistbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "townsfolk",
      "firstNight": 13,
      "ability": "每个夜晚，你会得知一名不同角色类型的玩家，直到场上所有的角色类型你都得知过一次。[+1 外来者]",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/balloonist.png"
    },
    {
      "firstNightReminder": "如果异教领袖改变了阵营，告诉他。",
      "isOfficial": true,
      "otherNightReminder": "如果异教领袖改变了阵营，告诉他。",
      "name": "异教领袖",
      "otherNight": 66,
      "setup": false,
      "reminders": [
        "同一阵营",
        "已尝试"
      ],
      "id": "cult_leaderbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "townsfolk",
      "firstNight": 46,
      "ability": "每个夜晚，你会转变为与你邻近的一名存活的玩家的阵营。每个白天，你可以提议所有玩家加入你的教派，如果所有善良玩家同意加入，你的阵营获胜。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/cultleader.png"
    },
    {
      "firstNightReminder": "工程师选择不使用能力，或在剧本列表中选择恶魔或爪牙角色。如果他选择爪牙角色，则需要选择对应数量的爪牙。然后将这些玩家依次唤醒，并告知他们变成了什么角色。",
      "isOfficial": true,
      "otherNightReminder": "工程师选择不使用能力，或在剧本列表中选择恶魔或爪牙角色。如果他选择爪牙角色，则需要选择对应数量的爪牙。然后将这些玩家依次唤醒，并告知他们变成了什么角色。",
      "name": "工程师",
      "otherNight": 7,
      "setup": false,
      "reminders": [
        "失去能力"
      ],
      "id": "engineerbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "townsfolk",
      "firstNight": 12,
      "ability": "每局游戏限一次，在夜晚时，你可以选择让恶魔变成你选择的恶魔角色，或让所有爪牙变成你选择的爪牙角色。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/engineer.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "渔夫",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "失去能力"
      ],
      "id": "fishermanbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "每局游戏限一次，在白天时，你可以让说书⼈给你一些能帮助你的阵营获胜的建议。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/fisherman.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "巡山人",
      "otherNight": 50,
      "setup": true,
      "reminders": [
        "失去能力",
        "曾是落难少女"
      ],
      "id": "huntsmanbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "townsfolk",
      "firstNight": 29,
      "ability": "每局游戏限一次，在夜晚时，你可以选择一名存活的玩家：如果你选中了落难少女，她会变成一个不在场的镇民角色。[+落难少女]",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/huntsman.png"
    },
    {
      "firstNightReminder": "唤醒炼金术士，对他展示“你变成了”标记，炼金术士角色标记以及一个不在场爪牙角色标记。炼金术士具有他的能力，说书人要向对待该爪牙一样对待炼金术士。",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "炼金术士",
      "otherNight": 0,
      "setup": false,
      "reminders": [
      ],
      "id": "alchemistbutton",
      "edition": "snv",
      "remindersGlobal": [
        "是炼金术士"
      ],
      "team": "townsfolk",
      "firstNight": 4,
      "ability": "你拥有一个不在场爪牙能力。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/alchemist.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果农夫在夜晚死去，则选择另一位善良玩家成为农夫。唤醒这名玩家，并告知他成为了农夫。",
      "name": "农夫",
      "otherNight": 45,
      "setup": false,
      "reminders": [
      ],
      "id": "farmerbutton",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "如果你在夜晚死亡，一名存活的善良玩家会变成农夫。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/farmer.png"
    },
    {
      "firstNightReminder": "跳过互认阶段。",
      "isOfficial": true,
      "otherNightReminder": "如果罂粟种植者死亡，重新进行互认阶段。",
      "name": "罂粟种植者",
      "otherNight": 3,
      "setup": false,
      "reminders": [
        "邪恶角色互认"
      ],
      "id": "poppy_growerbutton",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 3,
      "ability": "爪牙和恶魔互相不认识。如果你死亡，当晚他们会互相认识。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/poppygrower.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "失忆者",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "？"
      ],
      "id": "amnesiacbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "你不知道你有什么能力，但你的能力会正常生效。每个白天，你可以私下拜访说书人并猜测你的能力是什么：你会得知“无关/有关/接近/完美”四种正确程度之一。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/amnesiac.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "魔术师",
      "otherNight": 0,
      "setup": false,
      "reminders": [

      ],
      "id": "magicianbutton",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "爪牙以为你是恶魔。恶魔以为你是爪牙。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/magician.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "无神论者",
      "otherNight": 0,
      "setup": true,
      "reminders": [

      ],
      "id": "athiestbutton",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "说书人可以打破游戏规则。如果说书人被处决，善良阵营获胜，即使你已死亡。[无邪恶角色在场]",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/atheist.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "食人族",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "食用对象",
        "中毒"
      ],
      "id": "cannibalbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "你拥有上个死于处决的玩家的能力。如果该玩家属于邪恶阵营，你中毒直到下个善良玩家死于处决。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/cannibal.png"
    },
    {
      "firstNightReminder": "守夜人可以指向一名玩家。如果他这么做，则唤醒那名玩家，告知其被守夜人选中，且告知他守夜人是谁。",
      "isOfficial": false,
      "otherNightReminder": "守夜人可以指向一名玩家。如果他这么做，则唤醒那名玩家，告知其被守夜人选中，且告知他守夜人是谁。",
      "name": "守夜人",
      "otherNight": 65,
      "setup": false,
      "remindersGlobal": [

      ],
      "id": "nightwatchmanbutton",
      "edition": "snv",
      "reminders": [
        "失去能力"
      ],
      "team": "townsfolk",
      "firstNight": 45,
      "ability": "每局游戏限一次，在夜晚时，你可以选择一名玩家：他会得知你是守夜人。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/nightwatchman.png"
    },
    {
      "ability": "在你的首个夜晚，你会得知两名非恶魔玩家。",
      "image": "https://clocktower-wiki.gstonegames.com/images/thumb/6/6b/Knight.png/240px-Knight.png",
      "edition": "custom",
      "flavor": "",
      "id": "Knightbutton",
      "firstNightReminder": "唤醒骑士，对他展示两名非恶魔玩家。",
      "otherNightReminder": "",
      "name": "骑士",
      "otherNight": 0,
      "setup": 0,
      "reminders": ["非恶魔"],
      "remindersGlobal": [],
      "team": "townsfolk",
      "firstNight": 45
    },
    {
      "firstNightReminder": "分别给爪牙们展示三个不在场角色，这些信息之间，包括与展示给恶魔的不在场角色之间可能会有重叠。",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "告密者",
      "otherNight": 0,
      "setup": false,
      "reminders": [

      ],
      "id": "snitchbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "outsider",
      "firstNight": 5,
      "ability": "爪牙在他们的首个夜晚得知三个不在场善良角色。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/snitch.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": false,
      "otherNightReminder": "如果杂技演员左右两侧最近的存活善良玩家之一中毒或醉酒，杂技演员死亡。",
      "name": "杂技演员",
      "otherNight": 40,
      "setup": false,
      "remindersGlobal": [

      ],
      "id": "acrobatbutton",
      "edition": "snv",
      "reminders": [
        "死亡"
      ],
      "team": "outsider",
      "firstNight": 0,
      "ability": "每个夜晚*，如果与你邻近的存活善良玩家之一醉酒、中毒或者是酒鬼，你死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/acrobat.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "解谜大师",
      "otherNight": 0,
      "setup": false,
      "remindersGlobal": [

      ],
      "id": "puzzlemasterbutton",
      "edition": "snv",
      "reminders": [
        "醉酒",
        "已猜测"
      ],
      "team": "outsider",
      "firstNight": 0,
      "ability": "一名玩家醉酒，即使你已死亡。每局游戏限一次，你可以猜测谁是那个醉酒的玩家，如果猜对了，你会得知谁是恶魔，但如果猜错了，你会得知错误的“谁是恶魔”信息。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/puzzlemaster.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "异端分子",
      "otherNight": 0,
      "setup": false,
      "reminders": [

      ],
      "id": "hereticbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "outsider",
      "firstNight": 0,
      "ability": "所有本来获胜的玩家，改为落败；所有本来落败的玩家，改为获胜，即使你已死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/heretic.png"
    },
    {
      "firstNightReminder": "告知爪牙落难少女在场",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "落难少女",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "已猜测"
      ],
      "id": "24button",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "outsider",
      "firstNight": 5,
      "ability": "所有爪牙都知道落难少女在场。每局游戏限一次，任意爪牙可以公开猜测你是落难少女，如果猜对，你的阵营落败。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/damsel.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "魔像",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "无法提名"
      ],
      "id": "golembutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "outsider",
      "firstNight": 0,
      "ability": "每局游戏你只能发起提名一次。当你发起提名时，如果被你提名的玩家不是恶魔，他死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/golem.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "政客",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "最大责任"
      ],
      "id": "politicianbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "outsider",
      "firstNight": 0,
      "ability": "如果你是对你的阵营落败负最大责任的人，你转变阵营并获胜，即使你已死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/politician.png"
    },
    {
      "firstNightReminder": "给寡妇展示魔典，她想看多久就看多久。等她看完后，让她指向一个玩家。那个玩家中毒。唤醒一名善良玩家，告诉他场上有寡妇。",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "寡妇",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "中毒",
        "收到呼唤"
      ],
      "id": "widowbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "minion",
      "firstNight": 17,
      "ability": "在你的首个夜晚，你能查看魔典并选择一名玩家：他中毒。随后，始终会有一名善良玩家知道寡妇在场。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/widow.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "精神病患者",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "死亡"
      ],
      "id": "psychopathbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "minion",
      "firstNight": 0,
      "ability": "每个白天，在提名开始前，你可以公开选择一名玩家：他死亡。如果你被处决，提名你的玩家需要和你猜拳，只有你输了你才会死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/psychopath.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "哥布林",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "声明"
      ],
      "id": "goblinbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "minion",
      "firstNight": 0,
      "ability": "如果你在被提名后公开声明自己是哥布林且在那个白天被处决，你的阵营获胜。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/goblin.png"
    },
    {
      "firstNightReminder": "告诉灵言师他的秘密词语。",
      "isOfficial": false,
      "otherNightReminder": "唤醒第一个说出灵言师词语的玩家并告知他已经变成邪恶阵营。",
      "name": "灵言师",
      "otherNight": 17,
      "setup": false,
      "reminders": [
        "邪恶",
        "失去能力"
      ],
      "id": "mezephelesbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "minion",
      "firstNight": 26,
      "ability": "在你的首个夜晚，你会得知一个关键词。首个说出该关键词的善良玩家会在当晚转变为邪恶阵营。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/mezepheles.png"
    },
    {
      "firstNightReminder": "告诉恶魔提线木偶是谁。",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "提线木偶",
      "otherNight": 0,
      "setup": true,
      "reminders": [

      ],
      "id": "marionettebutton",
      "edition": "snv",
      "remindersGlobal": [
        "是提线木偶"
      ],
      "team": "minion",
      "firstNight": 10,
      "ability": "你以为你是一个善良角色，但其实你不是。恶魔会知道你是提线木偶。[提线木偶会与恶魔邻座]",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/marionette.png"
    },
    {
      "ability": "所有玩家在投票时闭眼，且票数会秘密统计。对你的提名只在你投票时才会统计票数。",
      "image": "https://clocktower-wiki.gstonegames.com/images/thumb/f/ff/Organgrinder.png/240px-Organgrinder.png",
      "edition": "custom",
      "flavor": "",
      "id": "Organgrindershowbutton",
      "firstNightReminder": "",
      "otherNightReminder": "",
      "name": "街头风琴手",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "即将被处决"
      ],
      "remindersGlobal": [
      ],
      "team": "minion",
      "firstNight": 0
    },
    {
      "ability": "所有玩家都知道你是维齐尔，你在白天时不会死亡。如果一次提名中有善良玩家投票，你可以让被提名者立即被处决。",
      "image": "https://clocktower-wiki.gstonegames.com/images/thumb/0/09/Vizier.png/240px-Vizier.png",
      "edition": "custom",
      "flavor": "",
      "id": "Vizirebutton",
      "firstNightReminder": "",
      "otherNightReminder": "",
      "name": "维齐尔",
      "otherNight": 0,
      "setup": 0,
      "reminders": [],
      "remindersGlobal": [],
      "team": "minion",
      "firstNight": 0
    },
    {
      "firstNightReminder": "恐惧之灵指向一名玩家，放置恐惧标记。宣布恐惧之灵选中或改变了目标。",
      "isOfficial": false,
      "otherNightReminder": "恐惧之灵指向一名玩家，放置恐惧标记。宣布恐惧之灵选中或改变了目标。",
      "name": "恐惧之灵",
      "otherNight": 16,
      "setup": false,
      "reminders": [
        "死亡"
      ],
      "id": "fearmongerbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "minion",
      "firstNight": 24,
      "ability": "每个夜晚，你要选择一名玩家：如果你提名他且他被处决，他的阵营落败。当你首次选择或更换目标时，所有玩家都会得知你选择了新的玩家。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/fearmonger.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": false,
      "otherNightReminder": "",
      "name": "爆炸王",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "投票"
      ],
      "id": "boomdandybutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "minion",
      "firstNight": 0,
      "ability": "如果你被处决，除三名玩家以外的其他所有玩家均会死亡。一分钟之后，被最多玩家手指指着的玩家死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/boomdandy.png"
    },
    {
      "firstNightReminder": "+1天数。",
      "isOfficial": false,
      "otherNightReminder": "+1天数。",
      "name": "暴乱",
      "otherNight": 100,
      "setup": true,
      "reminders": [
        "第一天",
        "第二天",
        "第三天",
        "死亡"
      ],
      "id": "riotbutton",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "demon",
      "firstNight": 100,
      "ability": "被提名的玩家死亡，但他可以立刻再次发起提名（第三天白天他必须这么做）。在第三个白天结束时，邪恶阵营获胜。[所有爪牙都是暴乱]",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/riot.png"
    },
    {
      "firstNightReminder": "哈迪寂亚选择三名玩家。对所有人宣告第一位玩家，然后唤醒他并让他秘密选择活着还是死去。依次对第二第三位玩家如此做。如果三名玩家都选择活着，他们都死亡。",
      "isOfficial": false,
      "otherNightReminder": "哈迪寂亚选择三名玩家。对所有人宣告第一位玩家，然后唤醒他并让他秘密选择活着还是死去。依次对第二第三位玩家如此做。如果三名玩家都选择活着，他们都死亡。",
      "name": "哈迪寂亚",
      "otherNight": 35,
      "setup": false,
      "remindersGlobal": [

      ],
      "id": "al-hadikhiabutton",
      "edition": "snv",
      "reminders": [
        "选择生",
        "选择死"
      ],
      "team": "demon",
      "firstNight": 15,
      "ability": "每个夜晚*，你要选择三名玩家（所有玩家都会得知你选了谁）：他们分别秘密决定自己的生死，然后如果他们都存活则都死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/alhadikhia.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": false,
      "otherNightReminder": "由说书人决定，让哪一名玩家死亡。",
      "name": "军团",
      "otherNight": 35,
      "setup": true,
      "remindersGlobal": [

      ],
      "id": "legionbutton",
      "edition": "snv",
      "reminders": [
        "仅军团投票",
        "死亡"
      ],
      "team": "demon",
      "firstNight": 0,
      "ability": "每个夜晚*，可能有一名玩家死亡。如果一项提名只有邪恶玩家投票，投票无效。你也会被当作是爪牙。[半数以上玩家为军团]",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/legion.png"
    },
    {
      "firstNightReminder": "宣布利维坦在场。+1天数。",
      "isOfficial": false,
      "otherNightReminder": "+1天数。",
      "name": "利维坦",
      "otherNight": 100,
      "setup": true,
      "reminders": [
        "第一天",
        "第二天",
        "第三天",
        "第四天",
        "第五天",
        "善良处决"
      ],
      "id": "leviathanbutton",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "demon",
      "firstNight": 100,
      "ability": "如果多于一名善良玩家被处决，邪恶阵营获胜。所有玩家都知道利维坦在场。在第五个白天结束时，邪恶阵营获胜。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/leviathan.png"
    },
    {
      "firstNightReminder": "唤醒所有爪牙，允许他们以指向的方式决定谁照看小怪宝，但不能产生其他交流，否则会有非常糟糕的事情发生。",
      "isOfficial": false,
      "otherNightReminder": "唤醒所有爪牙，允许他们以指向的方式决定谁照看小怪宝，但不能产生其他交流，否则会有非常糟糕的事情发生。说书人选择一名玩家，那名玩家死亡。",
      "name": "小怪宝",
      "otherNight": 35,
      "setup": false,
      "reminders": [

      ],
      "id": "lilmonstabutton",
      "edition": "snv",
      "remindersGlobal": [
        "保姆",
        "藻餐"
      ],
      "team": "demon",
      "firstNight": 15,
      "ability": "每个夜晚，所有爪牙要秘密决定由哪名玩家来照看小怪宝并且“是恶魔”。每个夜晚*，会有一名玩家死亡。[+1爪牙]",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/lilmonsta.png"
    },
    {
      "firstNightReminder": "痢蛭指向一名玩家。放置宿主&中毒标记，那名玩家中毒。",
      "isOfficial": false,
      "otherNightReminder": "痢蛭指向一名玩家。那名玩家死亡。",
      "name": "痢蛭",
      "otherNight": 35,
      "setup": false,
      "reminders": [
        "宿主&中毒",
        "死亡"

      ],
      "id": "lleechbutton",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "demon",
      "firstNight": 15,
      "ability": "每个夜晚*，你要选择一名玩家：他死亡。在你的首个夜晚，你要选择一名存活的玩家：他中毒（持续检测），只有他处于死亡状态时你才会一同死亡。",
      "image": "https://static.imdodo.com/clock-tower/assets/icons/lleech.png"
    },
    {
      "firstNightReminder": "唤醒阴阳师，并对他展示两个善良角色，两个邪恶角色，共四个角色标记。其中正好只有两个角色在场。",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "阴阳师",
      "otherNight": 0,
      "setup": false,
      "reminders": [
      ],
      "id": "hdcstf1",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 45,
      "ability": "在你的首个夜晚，你会得知两个善良角色和两个邪恶角色，其中有且只有两个角色在场。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/yinyangshi.png"
    },
    {
      "firstNightReminder": "唤醒钦天监，对其用拇指指向其左侧或右侧示意。如果两侧邪恶玩家与他距离相同，拇指朝下示意。如果与他邻近的玩家中有邪恶玩家，展示错误信息。（线上运作时，展示“左”，“右”或者“相同”）。",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "钦天监",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "错误"
      ],
      "id": "hdcstf2",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 45,
      "ability": "在你的首个夜晚，你会得知离你最近的邪恶玩家位于你的哪一侧（左/右/相同）。如果与你邻近的玩家中有邪恶阵营，你会得知错误信息。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/qintianjian.png"
    },
    {
      "firstNightReminder": "对两名善良玩家标记“被得知”和“醉酒”。唤醒店小二，对他指向标记有店小二的“被得知”和“醉酒”提示标记的这两名玩家。标记“醉酒”的玩家从现在开始醉酒。",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "店小二",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "被得知",
        "醉酒"
      ],
      "id": "hdcstf3",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 30,
      "ability": "在你的首个夜晚，你会得知两名善良玩家。他们之中会有一名玩家醉酒，即使你已死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_8586487694761_0ecde168.jpg"
    },
    {
      "firstNightReminder": "唤醒掮客，让他指向两名存活玩家。如果这两名玩家阵营相同，在这些玩家的角色标记旁放置“被选择”提示标记。",
      "isOfficial": true,
      "otherNightReminder": "唤醒掮客，让他指向两名存活玩家。如果这两名玩家阵营相同，在这些玩家的角色标记旁放置“被选择”提示标记。",
      "name": "掮客",
      "otherNight": 2,
      "setup": false,
      "reminders": [
        "被选择"
      ],
      "id": "hdcstf4",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 2,
      "ability": "每个夜晚，你要选择两名存活玩家：如果他们阵营相同，今晚任何玩家使用自身能力选择他们之一作为目标时，改为选中另一名玩家。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_7952077694761_e7ab28d7.jpg"
    },
    {
      "firstNightReminder": "唤醒郎中，让他指向一名玩家。以不会被其他玩家察觉的形式对其提供与该玩家角色能力相关的一个词语。",
      "isOfficial": true,
      "otherNightReminder": "唤醒郎中，让他指向一名玩家。以不会被其他玩家察觉的形式对其提供与该玩家角色能力相关的一个词语。",
      "name": "郎中",
      "otherNight": 65,
      "setup": false,
      "reminders": [
      ],
      "id": "hdcstf5",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 45,
      "ability": "每个夜晚，你要选择一名玩家：你会得知一个与他自身能力相关的词语。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_9255777694761_7594675d.jpg"
    },
    {
      "firstNightReminder": "如果邪恶玩家的能力首次对和尚邻近的玩家生效，取消这一效果并唤醒和尚，展示“他的能力对你触发”标记和“和尚”角色标记。",
      "isOfficial": true,
      "otherNightReminder": "如果邪恶玩家的能力首次对和尚邻近的玩家生效，取消这一效果并唤醒和尚，展示“他的能力对你触发”标记和“和尚”角色标记。",
      "name": "和尚",
      "otherNight": 70,
      "setup": false,
      "reminders": [
        "失去能力"
      ],
      "id": "hdcstf6",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 50,
      "ability": "每个夜晚，当有邪恶玩家的能力首次选择或影响你邻近的存活玩家时，该能力不会生效（除信息能力），并且你会得知这一信息",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_4432977694761_315f1863.jpg"
    },
    {
      "firstNightReminder": "唤醒熊孩子，让他选择两个善良角色。如果那个角色在场，在对应角色标记旁放置“捣蛋”提示标记。他的能力会产生错误信息，直到下个黄昏。",
      "isOfficial": true,
      "otherNightReminder": "唤醒熊孩子，让他选择两个善良角色。如果那个角色在场，在对应角色标记旁放置“捣蛋”提示标记。他的能力会产生错误信息，直到下个黄昏。",
      "name": "熊孩子",
      "otherNight": 13,
      "setup": false,
      "reminders": [
        "捣蛋"
      ],
      "id": "hdcstf7",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 29,
      "ability": "每个夜晚，你要选择2个善良角色：他们的能力会产生错误信息，直到下个黄昏。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_6984587694761_17384eb3.jpg"
    },
    {
      "firstNightReminder": "引路人选择两名玩家。展示“是”或“否”，表示是否有被邪恶玩家选择或者产生了影响。",
      "isOfficial": true,
      "otherNightReminder": "引路人选择两名玩家。展示“是”或“否”，表示是否有被邪恶玩家选择或者产生了影响。",
      "name": "引路人",
      "otherNight": 70,
      "setup": false,
      "reminders": [
      ],
      "id": "hdcstf9",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 50,
      "ability": "每个夜晚，你要选择两名玩家：你会得知今晚是否有邪恶玩家的能力选择或影响了他们之中的玩家。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_2147287694761_01761fcb.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "唤醒打更人，并让他猜测距离，以数字手势给出。在这两名玩家的角色标记旁放置“不会死亡”提示标记。在当晚首次有角色死亡时，如果是标记有“不会死亡”的玩家，那么当晚不会有除打更人外的任何人死亡。同时，如果说书人决定让打更人死亡，则在其角色标记旁放置“死亡”提示标记。在黎明时，移除所有“不会死亡”标记。",
      "name": "打更人",
      "otherNight": 13,
      "setup": false,
      "reminders": [
        "不会死亡",
        "死亡"
      ],
      "id": "hdcstf10",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "每个夜晚*，你要猜测今晚第一个死亡的玩家与你的距离（相邻的玩家距离为1）。如果你猜测正确，改为除你以外的所有玩家今晚不会死亡。但你可能会死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_3777477694761_d60dec0e.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "告知舞狮人一个在场角色。如果说书人选择给出恶魔的不在场角色之一，标记“已错误”。从现在开始不能再告知舞狮人不在场角色。",
      "name": "舞狮人",
      "otherNight": 65,
      "setup": false,
      "reminders": [
        "已错误"
      ],
      "id": "hdcstf11",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "每个夜晚*，你会得知一个在场角色。每局游戏限一次，你得知的信息改为恶魔的不在场角色之一。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_7613877694761_6041a632.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "让锦衣卫选择一名存活玩家。标记他被保护。下个黄昏前，如果他即将死亡，锦衣卫代替他死亡。",
      "name": "锦衣卫",
      "otherNight": 13,
      "setup": false,
      "reminders": [
        "保护"
      ],
      "id": "hdcstf12",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "每个夜晚*，你要选择一名存活玩家：如果他在下个黄昏前即将死亡，你代替他死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_5878087694761_691045fa.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "让道士选择一名玩家。如果他是恶魔，标记道士死亡。当晚不会再有其他玩家死亡。",
      "name": "道士",
      "otherNight": 22,
      "setup": false,
      "reminders": [
        "死亡"
      ],
      "id": "hdcstf13",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "每个夜晚*，你要选择一名玩家：如果他是恶魔，你死亡，并且当晚不会再有其他玩家死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_0866187694761_98fba0d5.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果歌伶在白天使用了能力，且恶魔成为了观众，标记歌伶死亡。",
      "name": "歌伶",
      "otherNight": 47,
      "setup": false,
      "reminders": [
        "观众",
        "当晚死亡"
      ],
      "id": "hdcstf14",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "每局游戏限一次，在白天时，你可以提议所有玩家观看你的演出，并从同意参加的玩家中选择你的观众。如果恶魔成为了观众，你会在当晚死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_5531277694761_f8a7e243.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "唤醒风水师。风水师要么摇头不使用能力，要么指向两名玩家。对其点头或摇头示意，随后在其角色标记旁放置“失去能力”提示标记。",
      "name": "风水师",
      "otherNight": 65,
      "setup": false,
      "reminders": [
        "失去能力"
      ],
      "id": "hdcstf15",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "每局游戏限一次，在夜晚时*，你可以选择两名不相邻的已死亡玩家：如果他们的阵营相同，你得知他们之间距离较近的玩家是否有恶魔；如果他们的阵营不同，你得知他们之间距离较远的玩家是否有恶魔。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_4627577694761_77873be9.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果提刑官在白天进行了整局游戏中他的首次提名，唤醒他并对他展示他提名的玩家的角色标记。",
      "name": "提刑官",
      "otherNight": 65,
      "setup": false,
      "reminders": [
        "被得知",
        "失去能力"
      ],
      "id": "hdcstf16",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "在你首次提名玩家后，你会在当晚得知他的角色。外来者会被你的能力当作爪牙或恶魔角色。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_7402377694761_cd9eb282.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "方士可以选择查看魔典，如果他这么做，标记他失去能力。说书人根据死亡玩家数量多少和局势给方士查看部分魔典。",
      "name": "方士",
      "otherNight": 65,
      "setup": false,
      "reminders": [
        "失去能力"
      ],
      "id": "hdcstf17",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "每局游戏限一次，在夜晚时*，你可以选择查看魔典的部分内容。死亡的玩家数量越多，你能看到的内容也就越多。最多能查看魔典的一半",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_9290087694761_94c7b6f3.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果今天悟道者被邪恶玩家选择或产生影响，唤醒悟道者并告诉他他的新角色。",
      "name": "悟道者",
      "otherNight": 1,
      "setup": false,
      "reminders": [

      ],
      "id": "hdcstf19",
      "edition": "snv",
      "remindersGlobal": [
        "是悟道者"
      ],
      "team": "townsfolk",
      "firstNight": 65,
      "ability": "你以为你是一个外来者，但其实你不是。如果有邪恶玩家的能力选择了你或对你产生了影响，在该效果生效前你会变成一个不在场的镇民角色。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_1638387694761_274bf6af.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "半仙",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "替代"
      ],
      "id": "hdcstf20",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 0,
      "ability": "在夜晚使用自身能力选择你的其他玩家，会改为选择另一名邪恶玩家作为替代。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_7374787694761_4173c620.jpg"
    },
    {
      "firstNightReminder": "以任意顺序指向三名玩家，其中一名与烂柯人阵营不同。",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "烂柯人",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "邪恶",
        "被得知"
      ],
      "id": "hdcstf21",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "firstNight": 40,
      "ability": "你不会得知你的阵营。你可能属于邪恶阵营。在你的首个夜晚，你会得知三名玩家，其中有且仅有两名玩家与你同一阵营。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/lankeren.png"
    },
    {
      "firstNightReminder": "说书人可以对宠妃打破规则。如果你这么做，唤醒宠妃，秘密地告诉他你做了什么。标记宠妃“失去能力”。从现在开始不能再对宠妃打破规则。",
      "isOfficial": true,
      "otherNightReminder": "说书人可以对宠妃打破规则。如果你这么做，唤醒宠妃，秘密地告诉他你做了什么。标记宠妃“失去能力”。从现在开始不能再对宠妃打破规则。",
      "name": "宠妃",
      "firstnight": 49,
      "otherNight": 69,
      "setup": false,
      "reminders": [
        "打破规则",
        "失去能力"
      ],
      "id": "hdcstf22",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "townsfolk",
      "ability": "每局游戏限一次，说书人会在关于你的事情上打破规则。随后，你会在当晚秘密得知说书人为此做了什么。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/chongfei.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果变脸师今天“疯狂”地证明了自己是一个善良角色且与之前不同，变脸师可能获得他的能力直到下个黄昏。",
      "name": "变脸师",
      "firstnight": 0,
      "otherNight": 2,
      "setup": false,
      "remindersGlobal": [
        "疯狂"
      ],
      "id": "hdcstf23",
      "edition": "snv",
      "reminders": [

      ],
      "team": "townsfolk",
      "ability": "每个白天，如果你“疯狂”地证明自己是一个善良角色（与之前不同），你可能会在当晚获得那个角色的能力，直到下个黄昏。 ",
      "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/bianlianshi.png"
    },
    {
      "firstNightReminder": "唤醒逆臣，让其选择一名玩家。在该玩家的角色标记旁放置“不共戴天”提示标记。",
      "isOfficial": true,
      "otherNightReminder": "如果逆臣或标记了“不共戴天”的玩家死于处决，唤醒两者之中的另一名玩家，告诉他转变为邪恶阵营。",
      "name": "逆臣",
      "otherNight": 13,
      "setup": false,
      "reminders": [
        "不共戴天",
        "邪恶"
      ],
      "id": "hdcsos1",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "outsider",
      "firstNight": 45,
      "ability": "在你的首个夜晚，你要选择除你以外的一名玩家：如果他死于处决，你在当晚转变为邪恶阵营；如果你死于处决，他在当晚转变为邪恶阵营，即使你已经死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_6302887694761_9ba8a0f3.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "酒保",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "醉酒"
      ],
      "id": "hdcsos2",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "outsider",
      "firstNight": 0,
      "ability": "与你邻近的善良玩家之一醉酒，即使你已死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_4591987694761_11d3a855.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果煞星死亡，一名与他相邻的善良玩家可能会死亡。标记他死亡。",
      "name": "煞星",
      "otherNight": 49,
      "setup": false,
      "reminders": [
        "死亡"
      ],
      "id": "hdcsos3",
      "edition": "snv",
      "remindersGlobal": [

      ],
      "team": "outsider",
      "firstNight": 0,
      "ability": "如果你死亡，当晚与你邻近的存活玩家之一可能会死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_2109987694761_638a3b4d.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果白天入殓师提名了恶魔且恶魔被处决，唤醒他，并对他展示“你是”提示标记和恶魔角色标记。",
      "name": "入殓师",
      "otherNight": 13,
      "setup": false,
      "reminders": [

      ],
      "id": "hdcsos4",
      "edition": "snv",
      "remindersGlobal": [
        "是恶魔",
        "失去能力"
      ],
      "team": "outsider",
      "firstNight": 0,
      "ability": "如果你提名并处决了恶魔，你会变成邪恶的恶魔（可以与原恶魔不同）。当剩余存活玩家小于等于四人时（旅行者除外），你失去能力。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_5757097694761_2de60c7b.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "使节",
      "otherNight": 0,
      "setup": false,
      "id": "hdcsos5",
      "edition": "snv",
      "reminders": [
        "转移"
      ],
      "team": "outsider",
      "firstNight": 0,
      "ability": "每个夜晚限一次，所有玩家在使用自身能力选择邪恶玩家时可能会改为选择你，即使你已死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_8334197694761_80377ad9.jpg"
    },
    {
      "firstNightReminder": "唤醒恶魔，并对他展示“该角色的能力对你触发”提示标记与书生角色标记。",
      "isOfficial": true,
      "otherNightReminder": "如果白天恶魔成功猜中了书生是谁，唤醒那个恶魔，让他选择一名玩家。标记那名玩家死亡。",
      "name": "书生",
      "otherNight": 49,
      "setup": false,
      "reminders": [
        "已猜测",
        "额外死亡"
      ],
      "id": "hdcsos6",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "outsider",
      "firstNight": 5,
      "ability": "恶魔知道你在场。每局游戏限一次，恶魔可以拜访说书人并猜测谁是书生。如果恶魔猜测正确时你仍存活，当晚该恶魔可以选择一名玩家：他死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_2950297694761_eb0206cd.jpg"
    },
    {
      "firstNightReminder": "酿酒师选择一个角色和一段信息，如果他在场，今晚他的能力会产生这些信息。",
      "isOfficial": true,
      "otherNightReminder": "酿酒师选择一个角色和一段信息，如果他在场，今晚他的能力会产生这些信息。",
      "name": "酿酒师",
      "otherNight": 8,
      "setup": true,
      "reminders": [
        "被选择"
      ],
      "id": "hdcsm3",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "minion",
      "firstNight": 17,
      "ability": "每个夜晚，你要选择一个善良角色并给出相应的信息形式：该角色通过自身能力获取信息时，改为得知你给出的信息，直到下个黄昏。[-1外来者]",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_3356597694761_0a4b67e6.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "魑魅",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "被选择"
      ],
      "id": "hdcsm4",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "minion",
      "firstNight": 0,
      "ability": "镇民可能会被当作外来者，外来者可能会被当作镇民。恶魔可能会被当作爪牙。你可能会被当作恶魔。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_0466697694761_4495aa77.jpg"
    },
    {
      "firstNightReminder": "告诉判官一个关键词。",
      "isOfficial": true,
      "otherNightReminder": "",
      "name": "判官",
      "otherNight": 0,
      "setup": false,
      "reminders": [
        "失去能力"
      ],
      "id": "hdcsm6",
      "edition": "snv",
      "remindersGlobal": [
      ],
      "team": "minion",
      "firstNight": 17,
      "ability": "在你的首个夜晚，你会得知一个关键词。在白天时（最后一天除外）有邪恶玩家首次说出该关键词会使得当前白天阶段立即结束。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_2742897694761_a220fc14.jpg"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "如果叫花子进行了宣称，她可能获得那个角色的能力直到下个黎明。",
      "name": "叫花子",
      "otherNight": 1,
      "setup": false,
      "remindersGlobal": [
        "获得能力"
      ],
      "id": "hdcst1",
      "edition": "snv",
      "team": "traveler",
      "firstNight": 0,
      "ability": "每个白天限一次，你可以公开选择一名其他玩家，让他选择一个非恶魔角色：你可能会获得这个角色的能力，直到下个黎明。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/jiaohuazi.png"
    },
    {
      "firstNightReminder": "",
      "isOfficial": true,
      "otherNightReminder": "被河伯提名的玩家可能死亡。如果你这么做，标记他死亡。",
      "name": "河伯",
      "otherNight": 1,
      "setup": false,
      "reminders": [
        "死亡"
      ],
      "id": "hdcst2",
      "edition": "snv",
      "team": "traveler",
      "firstNight": 0,
      "ability": "如果你提名了与你阵营相同的玩家，他可能会在当晚死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/hebo.png"
    },
    {
      "id": "40_chinese",
      "name": "须知",
      "edition": "custom",
      "team": "fabled",
      "ability": "该剧本由往世的华章制作调整,在原版全员追忆中加入华灯初上全角色(由于戏子与目前官方角色相性过差,暂没有加入),严格禁止未经同意非法盗用。角色名称、能力、顺序等相关官方可能随时有更新,详情请以钟楼百科为准。"
    },
    {
      "description": "",
      "name": "华灯初上 - 23.9.10测试",
      "logo": "https://clocktower-wiki.gstonegames.com/images/thumb/c/c2/Tf.png/600px-Tf.png",
      "id": "_meta"
    },
    {
      "ability": "任何在夜晚使用自身能力选择你的其他玩家，会改为选中另一名邪恶玩家作为替代。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_7374787694761_4173c620.jpg",
      "id": "banxian",
      "name": "半仙",
      "reminders": [],
      "team": "townsfolk"
    },
    {
      "ability": "每个白天，如果你“疯狂”地证明自己是一个善良角色（与之前不同），你会在当晚获得那个角色的能力，直到下个黄昏。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202303/c_3356245389761_205b53c7.jpg",
      "id": "bianlianshi",
      "name": "变脸师",
      "reminders": ["疯狂"],
      "remindersGlobal": ["是变脸师"],
      "team": "townsfolk"
    },
    {
      "ability": "每局游戏限一次，说书人会在关于你的事情上打破规则。随后，你会秘密得知说书人为此做了什么。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202303/c_8623445389761_b303f326.jpg",
      "id": "chongfei",
      "name": "宠妃",
      "reminders": ["失去能力"],
      "team": "townsfolk"
    },
    {
      "ability": "每个夜晚*，你要猜测今晚第一个死亡的玩家与你的距离。如果你猜测正确，改为除你以外的所有玩家今晚不会死亡，但你可能会死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_3777477694761_d60dec0e.jpg",
      "id": "dagengren",
      "firstNightReminder": "",
      "otherNight": 13.3,
      "otherNightReminder": "唤醒打更人，并让其猜测距离，以数字手势给出。在这两名玩家的角色标记旁放置“警惕”提示标记。在当晚首次有角色死亡时，如果是标记有“警惕”的玩家，那么当晚不会有除打更人外的任何人死亡。同时，如果说书人决定让打更人死亡，则在其角色标记旁放置“死亡”提示标记。在黎明时，移除所有“警惕”标记。",
      "name": "打更人",
      "reminders": ["警惕", "死亡"],
      "team": "townsfolk"
    },
    {
      "ability": "每个夜晚*，你要选择一名玩家：如果他是恶魔，你死亡，并且当晚不会再有其他玩家死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_0866187694761_98fba0d5.jpg",
      "id": "daoshi",
      "firstNightReminder": "",
      "otherNight": 22.90001,
      "otherNightReminder": "唤醒道士，让其选择一名玩家。如果他选中了恶魔，在他的角色标记旁放置“死亡”提示标记。",
      "name": "道士",
      "setup": 0,
      "reminders": ["死亡"],
      "team": "townsfolk"
    },
    {
      "ability": "在你的首个夜晚，你会得知两名善良玩家。他们之中会有一人醉酒，即使你已死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_8586487694761_0ecde168.jpg",
      "id": "dianxiaoer",
      "firstNight": 44.8,
      "firstNightReminder": "唤醒店小二，对他指向标记有店小二的“熟客”和“醉酒”提示标记的这两名玩家。",
      "otherNight": 0,
      "otherNightReminder": "",
      "name": "店小二",
      "reminders": ["熟客", "醉酒"],
      "team": "townsfolk"
    },
    {
      "ability": "每局游戏限一次，在夜晚时*，你可以选择查看魔典的部分内容。死亡的玩家数量越多，你能看到的内容也就越多，最多能查看魔典的一半。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_9290087694761_94c7b6f3.jpg",
      "id": "fangshi",
      "firstNightReminder": "",
      "otherNight": 68.10001,
      "otherNightReminder": "唤醒方士，如果他点头，让他查看魔典，但只展示部分内容。随后标记他“失去能力”。",
      "name": "方士",
      "reminders": ["失去能力"],
      "team": "townsfolk"
    },
    {
      "ability": "每局游戏限一次，在夜晚时*，你可以选择除你以外的两名玩家：根据他们的阵营（相同/相反）得知他们之间距离（较近/较远）的那一侧玩家中是否有恶魔。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_4627577694761_77873be9.jpg",
      "id": "fengshuishi",
      "firstNightReminder": "",
      "otherNight": 61.00001,
      "otherNightReminder": "唤醒风水师。风水师要么摇头不使用能力，要么指向两名玩家。对其点头或摇头示意，随后在其角色标记旁放置“失去能力”提示标记。",
      "name": "风水师",
      "reminders": ["失去能力"],
      "team": "townsfolk"
    },
    {
      "ability": "每局游戏限一次，在白天时，你可以提议所有玩家观看你的演出，并从同意参加的玩家中选择你的观众。如果恶魔成为了观众，你会在当晚死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_5531277694761_f8a7e243.jpg",
      "id": "geling",
      "firstNightReminder": "",
      "otherNight": 39.5,
      "otherNightReminder": "如果伶人在白天使用了能力，且恶魔成为了观众，标记伶人死亡。",
      "name": "歌伶",
      "reminders": ["失去能力", "死亡", "观众"],
      "team": "townsfolk"
    },
    {
      "ability": "每个夜晚，当有邪恶玩家的能力首次选择或影响与你邻近的存活玩家时，改为此次能力不生效，你会得知这一信息。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_4432977694761_315f1863.jpg",
      "id": "heshang",
      "name": "和尚",
      "reminders": ["已生效"],
      "team": "townsfolk"
    },
    {
      "ability": "每个夜晚*，你要选择一名玩家：如果他在下个黄昏前死亡，你代替他死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_5878087694761_691045fa.jpg",
      "id": "jinyiwei",
      "firstNightReminder": "",
      "otherNight": 13.5,
      "otherNightReminder": "移除上个夜晚放置的“保护”标记。唤醒锦衣卫，让其选择一名玩家。在该玩家角色标记旁放置“保护”提示标记。",
      "name": "锦衣卫",
      "reminders": ["保护"],
      "team": "townsfolk"
    },
    {
      "ability": "你不知道你的阵营（你有可能会属于邪恶阵营）。在你的首个夜晚，你会得知三名玩家，其中有且仅有两名玩家与你同一阵营。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202303/c_7118545389761_ff697164.jpg",
      "id": "lankeren",
      "firstNight": 43.50001,
      "firstNightReminder": "决定烂柯人的阵营，并唤醒他，指向三名玩家。其中两名玩家与他同一阵营。",
      "otherNightReminder": "",
      "name": "烂柯人",
      "reminders": ["被得知"],
      "team": "townsfolk"
    },
    {
      "ability": "每个夜晚，你要选择一名玩家：你会得知一个与他能力相关的词语。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_9255777694761_7594675d.jpg",
      "id": "langzhong",
      "firstNight": 44.5,
      "firstNightReminder": "唤醒郎中，让其指向一名玩家。以不会被其他玩家察觉的形式对其提供与该玩家角色能力相关的一个词语。",
      "otherNight": 63.5,
      "otherNightReminder": "唤醒郎中，让其指向一名玩家。以不会被其他玩家察觉的形式对其提供与该玩家角色能力相关的一个词语。",
      "name": "郎中",
      "team": "townsfolk"
    },
    {
      "ability": "每个夜晚，你要选择两名存活玩家：如果他们阵营相同，今晚任何玩家使用自身能力选择他们之一作为目标时，改为选中另一名玩家。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_7952077694761_e7ab28d7.jpg",
      "id": "qianke",
      "firstNight": 2.00001,
      "firstNightReminder": "唤醒掮客，让他指向两名存活玩家。如果这两名玩家阵营相同，在这些玩家的角色标记旁放置“熟客”提示标记。",
      "otherNight": 2.00001,
      "otherNightReminder": "移除上个夜晚放置的“熟客”标记。唤醒车夫，让他指向两名存活玩家。如果这两名玩家阵营相同，在这些玩家的角色标记旁放置“熟客”提示标记。",
      "name": "掮客",
      "reminders": ["熟客"],
      "team": "townsfolk"
    },
    {
      "ability": "在你的首个夜晚，你会得知离你最近的邪恶玩家位于你的哪一侧（左/右/相同）。如果与你邻近的玩家中有邪恶阵营，你会得知错误信息。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_4484677694761_241d43f7.jpg",
      "id": "qintianjian",
      "firstNight": 48.8,
      "firstNightReminder": "唤醒钦天监，对其用拇指指向其左侧或右侧示意。如果两侧邪恶玩家与他距离相同，拇指朝下示意。",
      "otherNightReminder": "",
      "name": "钦天监",
      "team": "townsfolk"
    },
    {
      "ability": "在你首次提名玩家后，你会在当晚得知他的角色。外来者会被你的能力当作爪牙或恶魔角色。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_7402377694761_cd9eb282.jpg",
      "id": "tixingguan",
      "otherNight": 56.00001,
      "otherNightReminder": "如果提刑官在白天进行了整局游戏中他的首次提名，唤醒他并对他展示他提名的玩家的角色标记。",
      "name": "提刑官",
      "reminders": ["被首次提名"],
      "team": "townsfolk"
    },
    {
      "ability": "每个夜晚，你会得知一个在场角色。每局游戏限一次，你得知的信息改为恶魔的伪装之一。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_7613877694761_6041a632.jpg",
      "id": "wushiren",
      "firstNight": 44.90001,
      "firstNightReminder": "唤醒舞狮人，对他展示一个角色标记。如果展示了恶魔的伪装，在舞狮人角色标记旁放置“限一次”角色标记。如果舞狮人有“限一次”角色标记，则无法对他展示恶魔的伪装作为正确信息。",
      "otherNight": 64.00001,
      "otherNightReminder": "唤醒舞狮人，对他展示一个角色标记。如果展示了恶魔的伪装，在舞狮人角色标记旁放置“限一次”角色标记。如果舞狮人有“限一次”角色标记，则无法对他展示恶魔的伪装作为正确信息。",
      "name": "舞狮人",
      "reminders": ["限一次"],
      "team": "townsfolk"
    },
    {
      "ability": "你以为你是一个外来者，但你实际上不是。如果有邪恶玩家的能力选择或影响了你，在该效果生效前你会变成一个不在场的镇民角色。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_1638387694761_274bf6af.jpg",
      "id": "wudaozhe",
      "name": "悟道者",
      "setup": 1,
      "reminders": [],
      "remindersGlobal": ["是悟道者"],
      "team": "townsfolk"
    },
    {
      "ability": "所有戏子互相认识。不论在场的戏子数量多少或存活与否，胜负结果会被对调。[所有善良玩家都是戏子]",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_7962177694761_cf9d050a.jpg",
      "id": "xizi",
      "firstNight": 9.8,
      "firstNightReminder": "唤醒所有戏子，让他们互相确认。如有必要，对他们展示“你是”提示标记和戏子角色标记。",
      "otherNightReminder": "",
      "name": "戏子",
      "setup": 1,
      "reminders": [],
      "team": "townsfolk"
    },
    {
      "ability": "每局游戏限一次，在夜晚时，你可以选择一名玩家：你会得知放置在该玩家角色标记旁的所有提示标记。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_6206687694761_6b022e99.jpg",
      "id": "xingjiaoshang",
      "otherNight": 47.00001,
      "firstNightReminder": "唤醒行脚商，如果行脚商选择了一名玩家，将当前放置在该玩家角色标记旁的所有提示标记展示给他看。",
      "otherNight": 67.00001,
      "otherNightReminder": "唤醒行脚商，如果行脚商选择了一名玩家，将当前放置在该玩家角色标记旁的所有提示标记展示给他看。",
      "name": "行脚商",
      "reminders": [],
      "team": "townsfolk"
    },
    {
      "ability": "每个夜晚，你要选择两个善良角色：他们的能力会产生错误信息，直到下个黄昏。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_6984587694761_17384eb3.jpg",
      "id": "xionghaizi",
      "firstNight": 28.5,
      "firstNightReminder": "唤醒熊孩子，让其选择两个善良角色。如果这些角色在场，在对应角色标记旁放置“捣蛋”提示标记。",
      "otherNight": 13.8,
      "otherNightReminder": "移除上个夜晚放置的“捣蛋”提示标记。唤醒熊孩子，让其选择两个善良角色。如果这些角色在场，在对应角色标记旁放置“捣蛋”提示标记。",
      "name": "熊孩子",
      "reminders": ["捣蛋"],
      "team": "townsfolk"
    },
    {
      "ability": "在你的首个夜晚，你会得知两个善良角色和两个邪恶角色。其中有且只有两个角色在场。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_4630967694761_bd56d041.jpg",
      "id": "yinyangshi",
      "firstNight": 44.3,
      "firstNightReminder": "唤醒阴阳师，并对其展示两个善良角色，两个邪恶角色，共四个角色标记。其中正好只有两个角色在场。",
      "name": "阴阳师",
      "reminders": [],
      "team": "townsfolk"
    },
    {
      "ability": "每个夜晚，你要选择两名玩家：你会得知今晚是否有邪恶玩家的能力选择或影响了他们之中的玩家。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_2147287694761_01761fcb.jpg",
      "id": "yinluren",
      "firstNight": 50.00001,
      "firstNightReminder": "唤醒摆渡者，让其选择两名玩家。以点头或摇头作为信息给出。",
      "otherNight": 70.00001,
      "otherNightReminder": "唤醒摆渡者，让其选择两名玩家。以点头或摇头作为信息给出。",
      "name": "引路人",
      "reminders": [],
      "team": "townsfolk"
    },
    {
      "ability": "与你邻近的善良玩家之一醉酒，即使你已死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_4591987694761_11d3a855.jpg",
      "id": "jiubao",
      "name": "酒保",
      "reminders": ["醉酒"],
      "team": "outsider"
    },
    {
      "ability": "在你的首个夜晚，你要选择除你以外的一名玩家：如果他先死于处决，你转变为邪恶；如果你先死于处决，他转变为邪恶。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_6302887694761_9ba8a0f3.jpg",
      "id": "nichen",
      "firstNight": 38.5,
      "firstNightReminder": "唤醒逆臣，让其选择一名玩家。在该玩家的角色标记旁放置“不共戴天”提示标记。",
      "otherNight": 19.8,
      "otherNightReminder": "如果逆臣或标记了“不共戴天”的玩家死于处决，唤醒两者之中的另一名玩家，告诉他变为邪恶阵营。",
      "name": "逆臣",
      "reminders": ["不共戴天"],
      "team": "outsider"
    },
    {
      "ability": "如果你提名并处决了恶魔，你会变成邪恶的恶魔。当剩余存活玩家小于等于四人时（旅行者除外），你失去能力。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_5757097694761_2de60c7b.jpg",
      "id": "rulianshi",
      "firstNightReminder": "",
      "otherNight": 20.00001,
      "otherNightReminder": "如果白天入殓师提名了恶魔且恶魔被处决，唤醒他，并对他展示“你是”提示标记和恶魔角色标记。",
      "name": "入殓师",
      "reminders": ["是恶魔"],
      "team": "outsider"
    },
    {
      "ability": "如果你死亡，当晚与你邻近的存活玩家之一可能会死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_2109987694761_638a3b4d.jpg",
      "id": "shaxing",
      "firstNightReminder": "",
      "otherNight": 49.5,
      "otherNightReminder": "如果煞星死亡，将与其邻近的存活善良玩家之一标记为死亡。",
      "name": "煞星",
      "reminders": ["死亡"],
      "team": "outsider"
    },
    {
      "ability": "每个夜晚限一次，所有玩家在使用自身能力选择邪恶玩家时会改为选中你，即使你已死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_8334197694761_80377ad9.jpg",
      "id": "shijie",
      "firstNightReminder": "",
      "otherNightReminder": "",
      "name": "使节",
      "reminders": ["已生效"],
      "team": "outsider"
    },
    {
      "ability": "恶魔知道你在场。每局游戏限一次，恶魔可以拜访说书人并猜测谁是书生。如果恶魔猜测正确，即使你已死亡，当晚该恶魔可以选择一名玩家：他死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_2950297694761_eb0206cd.jpg",
      "id": "shusheng",
      "firstNight": 9.5,
      "firstNightReminder": "唤醒恶魔，并对他展示“该角色的能力对你触发”提示标记与书生角色标记。",
      "otherNight": 36.9,
      "otherNightReminder": "如果白天恶魔成功猜中了书生是谁，唤醒那个恶魔，让其选择一名玩家。标记那名玩家死亡。",
      "name": "书生",
      "reminders": ["已猜测", "猜测正确", "死亡"],
      "team": "outsider"
    },
    {
      "ability": "镇民可能会被当作外来者，外来者可能会被当作镇民。恶魔可能会被当作爪牙。你可能会被当作恶魔。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_0466697694761_4495aa77.jpg",
      "id": "chimei",
      "name": "魑魅",
      "reminders": [],
      "team": "minion"
    },
    {
      "ability": "与你邻近的两名镇民玩家会在其首次死亡时被当作仍然存活。[-1外来者]",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_4215797694761_97f10b13.jpg",
      "id": "ganshiren",
      "name": "赶尸人",
      "setup": 1,
      "reminders": ["活尸"],
      "team": "minion"
    },
    {
      "ability": "蛊雕：每个夜晚，你要选择左或右：将你的飞行标记从当前位置移动到这个方向上的下一名存活善良玩家。他中毒且可能被当作邪恶阵营和爪牙角色，你会知道他原本的角色。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_4078497694761_5c6ddcce.jpg",
      "id": "gudiao",
      "firstNight": 17.00001,
      "firstNightReminder": "唤醒蛊雕，让其选择一个方向。将他的“中毒”标记移动至那个方向上的下一个存活玩家的角色标记旁。随后对他指向那名玩家，并展示“他是”提示标记和该玩家的角色标记。",
      "otherNight": 8.00001,
      "otherNightReminder": "唤醒蛊雕，让其选择一个方向。将他的“中毒”标记移动至那个方向上的下一个存活玩家的角色标记旁。随后对他指向那名玩家，并展示“他是”提示标记和该玩家的角色标记。",
      "name": "蛊雕",
      "setup": 0,
      "reminders": ["中毒"],
      "team": "minion"
    },
    {
      "ability": "在你的首个夜晚，你要选择一名玩家：他会知道狐媚娘在场。如果你死于处决，当晚他转变为邪恶阵营。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202303/c_1680545389761_39ffe6da.jpg",
      "id": "humeiniang",
      "firstNight": 27.5,
      "firstNightReminder": "唤醒狐媚娘，让她选择一名玩家。标记那名玩家“被魅惑”。随后唤醒那名玩家，对他展示“该角色的能力对你触发”和狐媚娘角色标记。",
      "otherNight": 19.5,
      "otherNightReminder": "如果今日狐媚娘死于处决，且被魅惑的玩家为善良阵营，唤醒被魅惑的玩家，对他展示“你是”和朝下的大拇指。",
      "name": "狐媚娘",
      "setup": 0,
      "reminders": ["被魅惑"],
      "team": "minion"
    },
    {
      "ability": "“疯狂”地想要死亡的玩家可能会立即被处决。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_6646397694761_b8fa3a26.jpg",
      "id": "jinweijun",
      "name": "禁卫军",
      "setup": 0,
      "reminders": [],
      "team": "minion"
    },
    {
      "ability": "每个夜晚，你要选择一个善良角色并给出相应的信息形式：该角色通过自身能力获取信息时，改为得知你给出的信息，直到下个黄昏。[-1外来者]",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_3356597694761_0a4b67e6.jpg",
      "id": "niangjiushi",
      "firstNight": 17.50001,
      "firstNightReminder": "唤醒酿酒师，让其选择一个角色并给出该角色对应的信息形式。如果该角色在场，在对应的角色标记旁放置“微醺”提示标记。如有必要，记录下该信息形式作为备忘，但不要将这一信息展示给任何能查看魔典的玩家。",
      "otherNight": 8.50001,
      "otherNightReminder": "唤醒酿酒师，让其选择一个角色并给出该角色对应的信息形式。如果该角色在场，在对应的角色标记旁放置“微醺”提示标记。如有必要，记录下该信息形式作为备忘，但不要将这一信息展示给任何能查看魔典的玩家。",
      "name": "酿酒师",
      "setup": 1,
      "reminders": ["微醺"],
      "team": "minion"
    },
    {
      "ability": "在你的首个夜晚，你会得知一个关键词。在白天时（最后一天除外）有邪恶玩家首次说出该关键词会使得当前白天阶段立即结束。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_2742897694761_a220fc14.jpg",
      "id": "panguan",
      "firstNight": 27.10001,
      "firstNightReminder": "唤醒判官，并对其展示关键词。",
      "otherNight": 0,
      "otherNightReminder": "",
      "name": "判官",
      "setup": 0,
      "reminders": ["失去能力"],
      "team": "minion"
    },
    {
      "ability": "在你存活时提名你的玩家会在当晚死亡，即使你已死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202303/c_6755345389761_b12d8c8e.jpg",
      "id": "yangguren",
      "firstNightReminder": "",
      "otherNight": 38.5,
      "otherNightReminder": "如果有玩家被放置了“提名”标记，标记该玩家死亡。",
      "name": "养蛊人",
      "setup": 0,
      "reminders": ["提名", "死亡"],
      "team": "minion"
    },
    {
      "ability": "每个夜晚，你要选择一至三名玩家。如果明天白天其中之一被处决，其余玩家会在当晚死亡。否则，当晚他们之中会有一名玩家死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_1550997694761_18049940.jpg",
      "id": "dianyuzhang",
      "firstNight": 28.00001,
      "firstNightReminder": "唤醒典狱长，让其选择至多三名玩家。在这些玩家角色标记旁放置“囚禁”提示标记。",
      "otherNight": 36.00001,
      "otherNightReminder": "如果今天白天被处决的玩家标记有“囚禁”，则其他标记有囚禁的玩家死亡。否则，将其中一人标记为死亡。移除所有“囚禁”提示标记。唤醒典狱长，让其选择至多三名玩家。在这些玩家角色标记旁放置“囚禁”提示标记。",
      "name": "典狱长",
      "setup": 0,
      "reminders": ["囚禁", "死亡"],
      "team": "demon"
    },
    {
      "ability": "每个夜晚*，你要选择一名玩家：他死亡。如果你以这种方式杀死了一名与你邻近的镇民玩家，所有善良玩家会中毒直到下个黄昏。",
      "image": "https://clocktower-wiki.gstonegames.com/images/thumb/4/49/Hundun.png/240px-Hundun.png",
      "id": "hundun",
      "firstNightReminder": "",
      "otherNight": 36.1,
      "otherNightReminder": "让混沌指向一名玩家。该玩家死亡，在他角色标记旁放置“死亡”提示标记（除非该玩家受到其他原因影响导致不会死亡）。让混沌重新入睡。如果混沌成功杀死了与自己邻近的一名镇民玩家，在魔典中央放置混沌的“善良中毒”提示标记。从现在起，所有玩家只要是善良阵营，就会处于中毒状态。在下一个黄昏开始时，移除混沌的“善良中毒”提示标记。",
      "name": "混沌",
      "setup": 0,
      "reminders": ["死亡", "善良中毒"],
      "remindersGlobal": [],
      "team": "demon",
      "firstNight": 0
    },
    {
      "ability": "每个夜晚*，你要选择一名玩家：他死亡。如果你今天白天没有投票，今晚你可以行动两次。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_8355008694761_b5e5fe2e.jpg",
      "id": "jianning",
      "firstNightReminder": "",
      "otherNight": 36.5,
      "otherNightReminder": "唤醒奸佞，让其选择一名玩家。如果白天奸佞没有投票，改为让其选择两名玩家。标记他选择的玩家死亡。",
      "name": "奸佞",
      "setup": 0,
      "reminders": ["死亡", "未投票", "已投票"],
      "remindersGlobal": [],
      "team": "demon",
      "firstNight": 0
    },
    {
      "ability": "每个夜晚*，你要选择一名玩家：他死亡。如果今天白天有外来者死亡，当晚改为你要选择一名玩家：他死亡，但被当作仍然存活，随后会有一名其他玩家死亡。[+1外来者]",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_3749208694761_610b7c97.jpg",
      "id": "qiongqi",
      "firstNightReminder": "",
      "otherNight": 36.2,
      "otherNightReminder": "唤醒穷奇，让其选择一名玩家。标记那名玩家死亡。如果穷奇的“死于今日”提示标记已被放置，且穷奇选择的玩家当前处于存活状态，并能够成功被穷奇杀死，那么穷奇选择的玩家进入“活尸”状态。",
      "name": "穷奇",
      "setup": 1,
      "reminders": ["死于今日", "死亡", "活尸"],
      "remindersGlobal": [],
      "team": "demon",
      "firstNight": 0
    },
    {
      "ability": "每个夜晚*，你要选择一名玩家：他死亡。使用自身能力选择你的玩家会改为选中自己。[-1外来者]",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_1941208694761_71bc0c2b.jpg",
      "id": "shimengmo",
      "firstNightReminder": "",
      "otherNight": 36.6,
      "otherNightReminder": "唤醒食梦貘，让其选择一名玩家。标记那名玩家死亡。",
      "name": "食梦貘",
      "setup": 1,
      "reminders": ["死亡"],
      "remindersGlobal": [],
      "team": "demon",
      "firstNight": 0
    },
    {
      "ability": "每个夜晚*，你要选择任意数量的非旅行者玩家或一名旅行者玩家：如果他们的角色类型均不相同，他们死亡。[+1外来者]",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_5897997694761_fbe1f00c.jpg",
      "id": "taotie",
      "firstNightReminder": "",
      "otherNight": 36.3,
      "otherNightReminder": "唤醒饕餮，让其选择任意数量的玩家。如果这些玩家的角色类型均不相同，标记这些玩家死亡。",
      "name": "饕餮",
      "setup": 1,
      "reminders": ["死亡"],
      "remindersGlobal": [],
      "team": "demon",
      "firstNight": 0
    },
    {
      "ability": "每个夜晚*，你要选择一名玩家：他死亡。当你将要死亡时，改为一名存活且具有能力的爪牙失去能力。你不会得知恶魔信息。",
      "image": "https://clocktower-wiki.gstonegames.com/images/thumb/5/52/Taowu.png/240px-Taowu.png",
      "id": "taowu",
      "firstNightReminder": "",
      "otherNight": 36.4,
      "otherNightReminder": "唤醒梼杌，让其选择一名玩家，并标记那名玩家死亡。",
      "name": "梼杌",
      "setup": 0,
      "reminders": ["死亡", "失去能力"],
      "remindersGlobal": [],
      "team": "demon",
      "firstNight": 0
    },
    {
      "ability": "如果你提名了与你阵营相同的玩家，他可能会在当晚死亡。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_5394408694761_dbd03fed.jpg",
      "id": "hebo",
      "firstNightReminder": "",
      "otherNightReminder": "",
      "name": "河伯",
      "otherNight": 1.00001,
      "setup": 0,
      "reminders": ["死亡"],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 0
    },
    {
      "ability": "每个白天限一次，你可以公开选择一名其他玩家，让他选择一个非恶魔角色：你可能会获得这个角色的能力，直到下个黎明。",
      "image": "https://oss.gstonegames.com/data_file/clocktower/upload/202301/c_9067308694761_341c00a3.jpg",
      "id": "jiaohuazi",
      "firstNightReminder": "",
      "otherNightReminder": "",
      "name": "叫花子",
      "otherNight": 0,
      "setup": 0,
      "reminders": [],
      "remindersGlobal": [],
      "team": "traveler",
      "firstNight": 0
    },
    {
      "ability": "在游戏的最后一天，最幸运的玩家身上会发生一些好的事情。",
      "id": "qilin",
      "image": "https://clocktower-wiki.gstonegames.com/images/thumb/9/9b/Qilin.png/400px-Qilin.png",
      "name": "麒麟",
      "reminders": ["好的事情"],
      "team": "fabled"
    },
    {
      "id": "41_chinese",
      "name": "𝓢𝓷𝓸𝔀の烧瓶",
      "edition": "custom",
      "team": "fabled",
      "ability": "点击下方链接（提建议请私信往世的华章）：https://www.bloodstar.xyz/p/Satiny_Snow_Sweetheart/Satiny_Snow_Bottle_Experiment/almanac.html",
      "image": "https://i.postimg.cc/25ztVH5W/snow-bottle.png"
    }
  ]




