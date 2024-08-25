# Metacrafters_js.project
project of NFTs

let numberOfNFTs = 0; 
let nfts = []; 


function mintNFT(stdname, uid, address, cgpa, imageURI) {
    let meta_data = {
        name: stdname,
        uid:uid,
        address:address,
        cgpa:cgpa,
        imageURI: imageURI
    };
    nfts.push(meta_data);
    numberOfNFTs++;
}

function listNFTs() {
    nfts.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Uid: " + nft.uid);
        console.log("Address: " + nft.address);
        console.log("CGPA: " + nft.cgpa);
        console.log("Image URI: " + nft.imageURI);
        console.log("\n");
    });
}


function getnumberOfNFTs() {
    return numberOfNFTs;
}

mintNFT("Arpan Dolui", "22BCS10470", "Kolkata,West Bengal","6.00","file:///C:/Users/arpan/Downloads/WhatsApp%20Image%202024-05-31%20at%2011.51.25%20AM.jpeg", );
mintNFT("Pravash Kumar Behara", "22BCS10464","Cuttack,Odisha","7.30", "file:///C:/Users/arpan/Downloads/WhatsApp%20Image%202024-05-31%20at%2011.51.25%20AM.jpeg", );
mintNFT("Ankit Dhua", "22BCS10360","Bakura, West Bengal","7.00", "file:///C:/Users/arpan/Downloads/WhatsApp%20Image%202024-05-31%20at%2011.51.25%20AM.jpeg", );

console.log("Total number of NFTs:", getnumberOfNFTs());

console.log("\nList of NFTs:");
listNFTs();

console.log("Thankyou visit again.");
