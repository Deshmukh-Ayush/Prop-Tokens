export default function AssetCard({ assetName, assetPrice }) {
    return (
      <div>
        <h3>{assetName}</h3>
        <p>Price: {assetPrice}</p>
        <button>View Details</button>
      </div>
    );
  }