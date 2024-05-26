// Step 1: Create a variable to hold the total number of NFTs
let totalNFTs = 0;

// Step 2: Function to mint a new NFT
// This function takes in metadata values (name, description, rarity) and creates an NFT object
function mintNFT(name, description, rarity) {
    // Create an object to hold the NFT metadata
    const newNFT = {
        name: name,
        description: description,
        rarity: rarity
    };
    // Increment the total number of NFTs
    totalNFTs++;
    // Return the created NFT object
    return newNFT;
}

// Step 3: Function to list all NFTs
// This function takes an array of NFTs and prints their metadata to the console
function listNFTs(NFTs) {
    // Loop through each NFT in the array
    NFTs.forEach(nft => {
        console.log("Name:", nft.name);
        console.log("Description:", nft.description);
        console.log("Rarity:", nft.rarity);
        console.log("------------------------");
    });
}

// Step 4: Function to get the total number of NFTs minted
// This function returns the total number of NFTs
function getTotalSupply() {
    return totalNFTs;
}

// Testing the functions
const myNFTs = []; // Create an array to hold the minted NFTs

// Mint some NFTs and add them to the array
myNFTs.push(mintNFT("NFT 1", "Description of NFT 1", "Rare"));
myNFTs.push(mintNFT("NFT 2", "Description of NFT 2", "Common"));
myNFTs.push(mintNFT("NFT 3", "Description of NFT 3", "Epic"));

// List all NFTs
listNFTs(myNFTs);

// Print the total number of NFTs minted
console.log("Total NFTs minted:", getTotalSupply());
