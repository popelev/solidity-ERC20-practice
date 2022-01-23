const Raly = artifacts.require("Raly")

contract("Raly", (accounts) => {
    
    before(async () => {
        raly = await Raly.deployed()
    })

    it("gives the owner of the tokens 1M tokens", async ()=>{
        let balance = await raly.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '1000000', "Balance should be 1M for contract creator")
    })

    it("can transfer tokens between accounts", async() => {
        let amount = web3.utils.toWei('1000', 'ether')
        await raly.transfer(accounts[1], amount, { from: accounts[0]})

        let balance = await raly.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '1000', "Balance should be 1K for contract creator")

    })
})