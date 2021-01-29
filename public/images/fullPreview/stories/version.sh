for version in 12.4alpha9 12.4alpha12 12.4alpha-2; do
    echo -n "$version => ";
    [[ "$version" =~ (.*[^0-9])([0-9]+)$ ]] && version="${BASH_REMATCH[1]}$((${BASH_REMATCH[2]} + 1))";
    echo "$version";
done
