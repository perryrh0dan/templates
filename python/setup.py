import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="{{name}}",
    version="0.0.2",
    author="Thomas Pöhlmann",
    author_email="thomaspoehlmann96@googlemail.com",
    description="",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="{{repository}}",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
) 