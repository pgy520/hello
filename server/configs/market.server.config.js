/**
 * 交易市场配置信息
 * Created by SivenLee on 2017/3/14.
 */
module.exports = {
    "btc_cny": {
        //市场名称
        name: "BTC/CNY",
        //币的货币类型
        coin: "btc",
        //钱的货币类型
        money: "cny",
        //是否显示市场
        display: true,
        //是否禁用市场
        disable: false,
        //是否启用一键杠杠
        lever: true,
        //币的有效小数位
        coinDecimal: 3,
        //钱的有效小数位
        moneyDecimal: 2,
        //交易额有效小数位
        amountDecimal: 4,
        //价格提示保护比例（买入价÷买一价，卖一价÷卖出价）
        priceProtect: 1.01,
        //单笔最大委托数量
        maxEntrustCoin: 1000,
        //单笔最大计划委托数量
        maxPlanCoin: 1000,
        //单笔最大计划委托金额
        maxPlanMoney: 1000000,
        //盘口深度控制
        depth: [0.01, 0.1, 1],
        //盘口档位控制
        length: [5, 10, 20, 50]
    },
    "ltc_cny": {
        name: "LTC/CNY",
        coin: "ltc",
        money: "cny",
        display: true,
        disable: false,
        lever: true,
        coinDecimal: 3,
        moneyDecimal: 2,
        amountDecimal: 4,
        priceProtect: 1.20,
        maxEntrustCoin: 10000,
        maxPlanCoin: 10000,
        maxPlanMoney: 1000000,
        depth: [0.01, 0.1, 0.3, 0.5],
        length: [5, 10, 20, 50]
    },
    "eth_cny": {
        name: "ETH/CNY",
        coin: "eth",
        money: "cny",
        display: true,
        disable: false,
        lever: true,
        coinDecimal: 3,
        moneyDecimal: 2,
        amountDecimal: 4,
        priceProtect: 1.05,
        maxEntrustCoin: 10000,
        maxPlanCoin: 10000,
        maxPlanMoney: 1000000,
        depth: [0.01, 0.1, 0.3, 0.5],
        length: [5, 10, 20, 50]
    },
    "etc_cny": {
        name: "ETC/CNY",
        coin: "etc",
        money: "cny",
        display: true,
        disable: false,
        lever: true,
        coinDecimal: 3,
        moneyDecimal: 2,
        amountDecimal: 4,
        priceProtect: 1.03,
        maxEntrustCoin: 10000,
        maxPlanCoin: 10000,
        maxPlanMoney: 1000000,
        depth: [0.01, 0.1, 0.3],
        length: [5, 10, 20, 50]
    },
    "etc_btc": {
        name: "ETC/BTC",
        coin: "etc",
        money: "cny",
        display: true,
        disable: false,
        lever: true,
        coinDecimal: 3,
        moneyDecimal: 2,
        amountDecimal: 4,
        priceProtect: 1.03,
        maxEntrustCoin: 10000,
        maxPlanCoin: 10000,
        maxPlanMoney: 1000000,
        depth: [0.01, 0.1, 0.3],
        length: [5, 10, 20, 50]
    },
    "eth_btc": {
        name: "ETH/BTC",
        coin: "eth",
        money: "cny",
        display: true,
        disable: false,
        lever: true,
        coinDecimal: 3,
        moneyDecimal: 2,
        amountDecimal: 4,
        priceProtect: 1.03,
        maxEntrustCoin: 10000,
        maxPlanCoin: 10000,
        maxPlanMoney: 1000000,
        depth: [0.01, 0.1, 0.3],
        length: [5, 10, 20, 50]
    },
    "ltc_btc": {
        name: "LTC/BTC",
        coin: "ltc",
        money: "cny",
        display: true,
        disable: false,
        lever: true,
        coinDecimal: 3,
        moneyDecimal: 2,
        amountDecimal: 4,
        priceProtect: 1.03,
        maxEntrustCoin: 10000,
        maxPlanCoin: 10000,
        maxPlanMoney: 1000000,
        depth: [0.01, 0.1, 0.3],
        length: [5, 10, 20, 50]
    },
    "btq_btc": {
        name: "BTQ/BTC",
        coin: "btq",
        money: "btc",
        display: false,
        disable: false,
        lever: false,
        coinDecimal: 2,
        moneyDecimal: 4,
        amountDecimal: 8,
        priceProtect: 2.00,
        maxEntrustCoin: 10000,
        maxPlanCoin: 10000,
        maxPlanMoney: 1000000,
        depth: [0.0001],
        length: [5]
    }
}