function Description({
  description,
  amenities,
}: {
  description: string;
  amenities: any;
}) {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-lg text-gray-800">Description</h1>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="mt-6">
        <h1 className="font-semibold text-lg text-gray-800">Amenities</h1>
        <div className="grid grid-cols-3 w-[54rem] gap-3 mt-2">
          {amenities?.map((amenity: any) => {
            return (
              <div key={amenity}>
                <p className="text-sm text-gray-600">{amenity}</p>
              </div>
            );
          })}
        </div>
      </div>
      <img
        src="/house2.jpg"
        alt="hero image"
        width={1920}
        height={1080}
        className="w-[40rem] mt-6 h-[25rem] rounded-xl object-cover"
      />
    </div>
  );
}

export default Description;
