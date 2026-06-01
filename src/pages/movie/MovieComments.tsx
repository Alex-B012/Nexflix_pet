interface MovieCommentsProps {
  comments: {
    id: number;
    name: string;
    text: string;
    stars?: number;
  }[];
}

const MovieComments = ({ comments }: MovieCommentsProps) => {
  return (
    <div className="movie-comments py-8">
      <h2 className="text-2xl font-semibold mb-16">Comments</h2>

      {comments?.length > 0 ? (
        <ul className="space-y-1">
          {comments.map((item) => (
            <li key={item.id} className=" text-start p-4 rounded-lg">
              <p className="font-semibold">
                {item.name}
                {item.stars && item.stars > 0 ? (
                  <span className="text-yellow-500 pl-3">
                    ⭐ {Math.round(item.stars)}/5
                  </span>
                ) : null}
              </p>
              <p className="pt-2"> {item.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="pt-8 text-gray-500 dark:text-gray-400">
          No comments yet.
        </p>
      )}
    </div>
  );
};

export { MovieComments };
