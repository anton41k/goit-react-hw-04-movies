const urlImg = "https://image.tmdb.org/t/p/w200";

export default function Cast({ cast, isError }) {
  return (
    <ul>
      {cast && !isError && cast.cast.length
        ? cast.cast.map((data) => (
            <>
              {data.profile_path && (
                <li key={data.id}>
                  <>
                    <img
                      src={`${urlImg}${data.profile_path}`}
                      alt={data.original_name}
                      width="100"
                    />
                    <p>{data.original_name}</p>
                  </>
                </li>
              )}
            </>
          ))
        : cast && (
            <li>
              <p>Not Found</p>
            </li>
          )}
    </ul>
  );
}
